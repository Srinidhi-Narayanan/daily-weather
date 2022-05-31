<script type="module">
import { toRefs } from '@vue/reactivity'

import SearchBar  from "../components/SearchBar.vue"
import SearchResults from "../components/SearchResults.vue"
import SearchForecast from "../components/SearchForecast.vue"

export default {
  components: {
    SearchBar,
    SearchResults,
    SearchForecast
  },
  data () {
    return {
      results: {},
      forecast: []
    }
  },
  methods: {
    onResults(data) {
      this.results = toRefs(data)
    },
    onForecast(data) {
     data.forEach(weather => {
       this.forecast.push(toRefs(weather))
     })
    }
  }
}
</script>

<template>
    <div>
  <div class="logo">
 Daily Weather
 <Chip label="Powered by Tomorrow.io" style="transform: scale(.5);" />
   </div>

    <SearchBar @results="onResults" @forecast="onForecast" />
    <Divider />
    <TabView>
    <TabPanel header="Today">
    <div class="weather-container">
    <SearchResults :results="results" />
    </div>
    </TabPanel>
    <TabPanel header="Forecast">
    <div class="forecast-container"> 
      <SearchForecast v-for="weather in forecast" style="margin-top: 2px;" :key="weather.date" :forecast="weather" />
    </div>
    </TabPanel>
    </TabView>
</div>
</template>

<style>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 16px;
  font-weight: bolder;
  font-size: x-large;
}
.weather-container {
  display: flex;
  justify-content: space-around;
}

.forecast-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
