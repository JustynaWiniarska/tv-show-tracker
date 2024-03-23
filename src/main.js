import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.css'

const app = createApp(App)

// Configuration
app.config.productionTip = false

// Use the router
app.use(router)

// Mount the app
app.mount('#app')


