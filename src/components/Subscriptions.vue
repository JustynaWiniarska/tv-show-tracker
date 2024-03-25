<template>
  <div>
    <Search />

    <section class="section">
      <div class="columns">
        <div class="column is-3">
          <nav class="panel">
            <p class="panel-heading">Shows</p>

          </nav>
        </div>

        <div class="column is-9">
          <h1 class="title is-3">Your schedule</h1>

          <p v-if="subscriptions.length == 0">You don't have any subscriptions yet. Search for shows above, then subscribe!</p>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Search from '@/components/Search'
// import Fetch from '@/library/Fetch.js'
import Database from '@/library/Database.js'

export default {
  components: {
    'Search': Search
  },
  data() {
    return {
      subscriptions: [],

    }
  },
  created() {
    Database.get_data()
    .then(response => {
      console.log(response)
    })
  },
  methods: {

  }
}
</script>