import "/src/assets/main.css?t=1691825441853"

import { createApp } from "/node_modules/.vite/deps/vue.js?v=d2e4cf1c"
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=d2e4cf1c"

import App from "/src/App.vue"
import router from "/src/router/index.js?t=1691825441853"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
