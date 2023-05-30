import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

export const usePriceStore = defineStore('price', {
  
    state: () =>{
      return{
        euro: 3,
        cent: 0
      }
    },
    
    actions: {
      increment() {
        this.euro++
      },

      // increment with custom values for euro (e) and cent (c)
      incrementec(e: number, c: number) {
        this.euro = this.euro + e
        this.cent = this.cent + c
      },
  
      decrement() {
        if(this.euro > 3){
            this.euro--
        }
      },

      // decrement with custom values for euro (e) and cent (c)
      decrementec(e: number, c: number) {
        this.euro = this.euro - e
        this.cent = this.cent - c
      }
    }
  }
  )
  