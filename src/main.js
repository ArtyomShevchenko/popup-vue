import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(MotionPlugin, {
    directives: {
        'pop-bottom': {
            initial: {
                scale: 0,
                opacity: 0,
                y: 100,
            },
            visible: {
                scale: 1,
                opacity: 1,
                y: 0,
            },
        },
    }
})
app.mount('#app')