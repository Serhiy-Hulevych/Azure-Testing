import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            token: "",
        }
    },

    mutations: {
        token(state, token) {
            state.token = token
        },
    }
})

window.store = store

createApp(App).use(router).use(store).mount('#app')
