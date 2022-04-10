<template>
  <!-- con un v-if, haré que se muestre la página de inicio una vez pasados
  4 segundos y que se deje de mostrar el logo. (ejemplo portfolio admin view vs user view) -->
  <div class="flex flex-col items-center">
    <div>
      <img
        src="/img/logo final. pequeño blanco.png"
        alt="logo"
        class="h-[100px] mt-2"
      />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
