# TV Show Tracker
### Project uses:
#### Vue 2 | Vue Router

### Main Search Page
- Includes a search bar which fetches shows, where titles match user's input.
<img width="977" alt="Screenshot 2024-03-24 at 3 12 40 PM" src="https://github.com/JustynaWiniarska/tv-show-tracker/assets/22163656/a8b9902d-0f5e-4d44-8d87-e410802d5d33">

### Details Page
- Show details data is obtained in `created` lifecycle hook, based on a given `$route.params.id`
- Data is modified to group episodes by each season.
```
Fetch.get('shows/' + this.$route.params.id + '/episodes')
.then(response => {
  let modifiedData = {}
    response.reverse().forEach(episode => {
      let key = 'season_' + episode.season
      if (!modifiedData[key]) modifiedData[key] = { episodes: [] }
      modifiedData[key].season = episode.season
      modifiedData[key].episodes.unshift(episode)
    })
  this.allEpisodes = modifiedData
})
```
<img width="952" alt="Screenshot 2024-03-24 at 3 11 14 PM" src="https://github.com/JustynaWiniarska/tv-show-tracker/assets/22163656/f98b6872-6856-410d-93cb-f8293d5e4ff7">
