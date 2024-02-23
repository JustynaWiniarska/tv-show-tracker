<template>

    <div>
<h2>Music Index</h2>
    <table class="table is-fullwidth is-striped is-hoverable is-narrow">
      <thead>
        <th style="width: 30%">Artist</th>
        <th style="width: 30%">Title</th>
        <th style="width: 30%">Album</th>
        <th style="width: 20%">Genre</th>
      </thead>


      <tbody 
            v-for="(song, index) in songs" 
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

    </div>
</template>

<script>
import MusicData from '@/assets/list.json'

export default {
    data () {
        return {
            songs: MusicData
        }
    }
}
</script>