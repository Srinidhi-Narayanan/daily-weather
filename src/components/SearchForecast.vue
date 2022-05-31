<script>
export default {
  props: {
    forecast: Object
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
    findIcon(code) {
      if(code) {
        return new URL(`../assets/icons/${code}.png`, import.meta.url).href
      }
    },
  }
}
</script>

<template> 
<div class="forecast-card">
        <div class="forecast-data">
        <div >
            {{ removeTime(forecast.date) }}
        </div> 
        <img v-if="forecast.weatherCode" class="scale" :src="findIcon(forecast.weatherCode)" />
        <div> {{ forecast.description }} </div>
        <div> <b> {{~~(forecast.temperature)}} </b> <span style="font-size: 80%"> °C </span> </div>
        </div>
</div>
</template>

<style>

.forecast-card {
  width: 624px; 
  height:80px; 
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);  
  padding: 2px 16px;
}

.forecast-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.forecast-data .scale {
    transform: scale(0.40);
}

</style>
