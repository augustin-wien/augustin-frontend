<script setup lang="ts">
    import { RouterLink} from 'vue-router'
</script>

<template>
  <main  className="h-screen px-10 py-16 grid grid-rows-">
    <div className="place-items-center">
        <img alt="Augustin logo" className="logo mx-auto my-2" src="@/assets/logo.svg" width="270" height="150"/>
    </div>
    <div className="flex items-center font-semibold text-4xl place-content-center">
        E-Paper
    </div>
    <div className="flex text-center w-full place-content-center text-xl">
        E-Paper ist einen digitale Zeitung, diese wird dir nach deinem Kauf in unserem online Store angezeigt.
    </div>
    <div className="flex items-center font-semibold text-4xl place-content-center">
        Print-Version
    </div>
    <div className="flex text-center w-full place-content-center text-xl">
        Die Print-Version ist die klassische physische Zeitung. Ihr_e Verkäufer_in wird Ihnen diese nach Abschluss des Kaufes aushändigen.
    </div>
    <div className="flex place-items-center w-full">
        <button class="bg-green-600 rounded-full p-7 text-white text-4xl font font-semibold w-full">
            <RouterLink to="/print-digital">Zurück</RouterLink>
        </button>
    </div>
  </main>
</template>