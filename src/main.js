import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons css
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Divider from 'primevue/divider'
import ProgressBar from 'primevue/progressbar'
import Chip from 'primevue/chip'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import ScrollPanel from 'primevue/scrollpanel';



import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(PrimeVue)
app.use(router)

app.component('Card', Card)
app.component('InputText', InputText)
app.component('Divider', Divider)
app.component('ProgressBar', ProgressBar)
app.component('Chip', Chip)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('ScrollPanel', ScrollPanel)



app.mount('#app')
