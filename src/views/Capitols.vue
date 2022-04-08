<template>
  <div class="sticky top-0">
    <div class="flex justify-center font-new px-8 py-4">
      <button class="hover:text-3xl text-white text-2xl px-4 py-1">
        <RouterLink to="/"> inici</RouterLink>
      </button>
      <div class="flex items-center font-bold text-white text-2xl gap-2">
        <div class="font-bold text-5xl text-white">capítols</div>

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

  <div class="container mx-auto mt-10">
    <div class="flex flex-col items-center text-white">
      <h1 class="h-96">1</h1>
      <h1 class="h-96">2</h1>
      <h1>3</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
