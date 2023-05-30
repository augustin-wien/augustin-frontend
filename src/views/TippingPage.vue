<script setup lang="ts">
    import { usePriceStore } from '@/stores/price'
    import { RouterLink} from 'vue-router'
    const priceStore = usePriceStore()
    const increment = priceStore.increment
    const incrementec = priceStore.incrementec
</script>

<template>
  <main  className="h-screen px-10 py-16 grid grid-rows-[7] place-items-center">
    <header >
        <img alt="Augustin logo" className="logo mx-auto my-5" src="@/assets/logo.svg" width="270" height="150"/>
    </header>
    <div className="text-center font-semibold text-4xl">
        Trinkgeld geben
    </div>
    <div className="flex place-items-center w-full">
        <button @click="incrementec(0, 25)" class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/">0,25 €</RouterLink>
        </button>
    </div>
    <div className="flex place-items-center w-full">
        <button @click="incrementec(0, 50)" class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/">0,50 €</RouterLink>
        </button>
    </div>
    <div className="flex place-items-center w-full">
        <button @click="increment" class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/">1,00 €</RouterLink>
        </button>
    </div>
    <div className="flex place-items-center w-full">
        <button class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/">Eigener Betrag</RouterLink>
        </button>
    </div>
    <div className="flex place-items-center w-full">
        <button class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/">Heute nicht</RouterLink>
        </button>
    </div>
  </main>
</template>