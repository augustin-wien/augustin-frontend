<script setup lang="ts">
    import { usePriceStore } from '@/stores/price'
    import { RouterLink} from 'vue-router'
    const priceStore = usePriceStore()
    const increment = priceStore.increment
    const decrement = priceStore.decrement
</script>

<template>
  <main  className="h-screen px-10 py-16 grid grid-rows-6 place-items-center">
    <header >
        <img alt="Augustin logo" className="logo mx-auto my-5" src="@/assets/logo.svg" width="270" height="150"/>
    </header>
    <div className="text-center font-semibold text-4xl">
        Zeitung kaufen
    </div>
    <div className="grid grid-cols-5 py-10 row-span-2 w-full">
        <button @click="increment">+</button>
        <p className="text-center text-9xl font-semibold col-span-3">{{ priceStore.euro }}€</p>
        <button @click="decrement">-</button>
    </div>
    <div className="flex place-items-center row-span-2 w-full">
        <button class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/tipping">Weiter</RouterLink>
        </button>
    </div>
  </main>
</template>