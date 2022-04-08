<template>
  <div class="sticky top-0">
    <div class="flex justify-center font-new px-8 py-4">
      <div class="font-bold text-5xl text-white">inici</div>
      <div class="flex items-center font-bold text-white text-2xl gap-2">
        <button class="hover:text-3xl px-4 py-1">
          <RouterLink to="/capitols"> Capítols</RouterLink>
        </button>

        <button class="hover:text-3xl px-4 py-1">
          <RouterLink to="/comentaris">Comentaris</RouterLink>
        </button>

        <button class="hover:text-3xl px-4 py-1">
          <RouterLink to="/col·laboracions"> Col·laboracions </RouterLink>
        </button>

        <button class="hover:text-3xl px-4 py-1">
          <RouterLink to="/projectesInteres"> Projectes d'interés </RouterLink>
        </button>
      </div>
    </div>
  </div>
  <h1 class="text-white">pàg inici</h1>
</template>

<script>
export default {};
</script>

<style></style>
