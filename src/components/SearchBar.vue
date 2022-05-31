<script>
export default {
  emits: ['results', 'forecast'],
  data() {
    return {
      searchItem: "",
      results: {
	      date: "",
	      description: "",
	      city: "",
	      temperature: "",
	      humidity: "",
	      windSpeed: "",
	      weatherCode: "",
        compareText: ""
            },
      forecast: [],
      loading: false
    }
  },
  methods: {
    async getWeather() {
      this.loading = true
       this.results = await this.axios.get(`api/weather/daily/${this.searchItem}`).then((response) => {
        this.loading = false
        return response.data
      })
       this.results.compareText = await this.axios.get(`api/weather/comparison/${this.searchItem}`).then((response) => {
          return response.data
        })
      this.forecast =   await this.axios.get(`api/weather/forecast/${this.searchItem}`).then((response) => {
          return response.data
        })
        this.$emit('results', this.results)
        this.$emit('forecast', this.forecast)
    }
  }
}
</script>

<template>
<div class="search">
<span class="p-input-icon-left p-input-icon-right">
    <i class="pi pi-search" />
    <InputText type="text" v-model="searchItem" placeholder="Search City" @keyup.enter="getWeather" />
        <i v-if="loading" class="pi pi-spin pi-spinner" />
</span>
</div>
</template>

<style>
.search {
    display: flex;
    justify-content: center;
}
</style>
