<script>
export default {
  props: {
    results: Object
  },
  data() {
    return {
    }
  },
  methods: {
   removeTime(date) {
     if (date){
       return new Date(date).toDateString()
     } 
      return ''
    },
    formatCity(city) {
      if(city) {
        return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
      }
       return ''
    },
     findIcon(code) {
      if(code) {
        return new URL(`../assets/icons/${code}.png`, import.meta.url).href
      }
    },
    compareText(text) {
      if(text) {
        return text[0].toUpperCase() + text.slice(1)
      }
      return ''
    }
  }
}
</script>

<template>
<Card v-if="results.weatherCode"  style="width:30%;">
  <template #header>
       </template>
    <template #title> 
        <div class="weather-title">
            {{ formatCity(results.city) }}, {{ removeTime(results.date) }}
            </div> 
            </template>
    <template #content>
        <div class="weather-icon"><img v-if="results.weatherCode" :src="findIcon(results.weatherCode)" /> </div>
        <div class="weather">
        <span class="temperature"> {{~~(results.temperature)}} <span style="font-size: 80%"> °C </span></span> 
        <span class="weather-description"> {{ results.description }} </span>
        <span class="weather-additional"> Humidity: {{ results.humidity }} % </span>
        <span class="weather-additional"> Wind Speed: {{ results.windSpeed }} mph </span>
        <span style="font-size: 60%; align-text: right;"><b>{{ compareText(results.compareText) }}</b> than yesterday</span>
        </div>
    </template>
</Card>
</template>

<style>
.weather-title {
    background-color: var(--bluegray-200);
    color: white;
    text-align: center;
    font-size: 120%; 
}
.weather {
    display: flex;
    flex-direction: column;
    
}

.weather-icon {
    display: flex;
    align-self: stretch;
    justify-content: flex-end;
    margin-bottom: -8%;
}

.weather-description {
    font-size: 120%;  
}

.weather-additional {
  font-size: 80%; 
}

.temperature {
  font-size: 500%;   
}
</style>
