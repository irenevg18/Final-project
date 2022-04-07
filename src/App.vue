<template>
  <!-- con un v-if, haré que se muestre la página de inicio una vez pasados
  4 segundos y que se deje de mostrar el logo. (ejemplo portfolio admin view vs user view) -->
  <div>
    <h1>Hola. Aquí va el logo</h1>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
