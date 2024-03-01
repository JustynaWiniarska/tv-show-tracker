<template>
  <nav class="panel">
    <p class="panel-heading">Playlists</p>

    <p v-for="playlist in playlists"
      :key="playlist.slug"
    >
      <span class="panel-icon"><fa-icon icon="book" /></span>
      {{ playlist.name }}
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
// import localforage from 'localforage'

export default {
  data () {
    return {
      newPlaylistName: '',
      playlists: []
    }
  },
  methods: {
    addPlaylist() {
      this.playlists.push({
        name: this.newPlaylistName,
        slug: this.slugify(this.newPlaylistName),
        songs: []
      })
      this.newPlaylistName = ''
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