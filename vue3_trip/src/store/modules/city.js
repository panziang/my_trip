import { getCityAll } from "@/service";
import { defineStore } from "pinia";

//将网络请求放在pinia中
const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName:"广州"
    }
  }),
  actions: {
    async fetchAllCitiesData () {
      const res = await getCityAll()
      this.allCities=res.data
    }
  }
})

export default useCityStore