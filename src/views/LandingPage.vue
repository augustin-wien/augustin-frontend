<script setup lang="ts">
    import { usePriceStore } from '@/stores/price'
    import { settingsStore } from '@/stores/settingsStore';
    import { RouterLink} from 'vue-router'
    import { onMounted } from 'vue'
    const priceStore = usePriceStore()
    const increment = priceStore.increment
    const decrement = priceStore.decrement
    const settStore = settingsStore()
    onMounted(() => {settStore.fetchSettings()})

</script>

<template>
    <component :is="$route.meta.layout || 'div'">
        <template #main>
            <main className="h-screen px-10 py-16 grid grid-rows-6 place-items-center">
                <div className="text-center font-semibold text-4xl">
                    Zeitung kaufen
                </div>
                <div className="grid grid-cols-5 py-10 row-span-2 w-full">
                    <button @click="increment">+</button>
                    <p className="text-center text-9xl font-semibold col-span-3">{{ priceStore.price }}€</p>
                    <button @click="decrement">-</button>
                </div>
                <div className="flex place-items-center row-span-2 w-full">
                    <button class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
                        <RouterLink to="/tipping">Weiter</RouterLink>
                    </button>
                </div>
            </main>
        </template>
    </component>
</template>
