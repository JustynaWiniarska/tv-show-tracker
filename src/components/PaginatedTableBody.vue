<template>
  <tbody>
    <tr
      v-for="(song, index) in items"
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
    }
  }  
}
</script>