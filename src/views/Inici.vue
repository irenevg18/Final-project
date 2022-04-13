<template>
  <div class="sticky top-0">
    <div class="flex justify-center font-new px-8 py-4">
      <div class="font-bold text-5xl text-white">inici</div>
      <div class="flex items-center font-bold text-white text-2xl gap-2">
        <RouterLink class="hover:text-3xl px-4 py-1" to="/capitols">
          Capítols</RouterLink
        >

        <RouterLink class="hover:text-3xl px-4 py-1" to="/colaboracions">
          Col·laboracions
        </RouterLink>

        <RouterLink class="hover:text-3xl px-4 py-1" to="/projectesInteres">
          Projectes d'interés
        </RouterLink>
      </div>
    </div>
  </div>

  <div class=" bg-black/25 flex flex-col items-center">
    <h1 class="text-white font-new text-center text-3xl">
      Què és Desnaturalitzats?
    </h1>
    <div class="text-white text-center  w-64">
      És una sèrie de documentals de naturalesa realitzats als espais naturals
      de Catalunya.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
