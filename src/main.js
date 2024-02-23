import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)

const app = createApp(App)

// Configuration
app.config.productionTip = false

// Use the router
app.use(router)



// Use FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon)


// Mount the app
app.mount('#app')


