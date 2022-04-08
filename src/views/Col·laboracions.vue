<template>
  <div class="flex justify-center font-new px-8 py-4">
    <button class="hover:text-3xl text-white text-2xl px-4 py-1">
      <RouterLink to="/"> inici</RouterLink>
    </button>
    <div class="flex items-center font-bold text-white text-2xl gap-2">
      <button class="hover:text-3xl px-4 py-1">
        <RouterLink to="/capitols">Capítols</RouterLink>
      </button>

      <button class="hover:text-3xl px-4 py-1">
        <RouterLink to="/comentaris">Comentaris</RouterLink>
      </button>

      <div class="font-bold text-5xl text-white">Col·laboracions</div>

      <button class="hover:text-3xl px-4 py-1">
        <RouterLink to="/projectesInteres"> Projectes d'interés </RouterLink>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
