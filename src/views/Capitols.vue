<template>
  <!-- hay que poner un loading mientras se cargan los vídeos -->
  <!-- con un condicional mostrar el componente modal -->

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
    <div class="flex flex-col gap-44 items-center text-white">
      <div class="flex flex-col items-center gap-8">
        <div>
            <pantalla-click v-if="pantalla"/>
        <iframe
          src="https://player.vimeo.com/video/664231814?h=391783c052&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="730"
          height="411"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Cap&amp;iacute;tol 1: Lluny del bosc"
      
          @mouseover="showPantallaClick"
          @mouseleave="pantalla = false"
        ></iframe>
        </div>
        <h1 class="text-center font-new text-5xl">capítol 1: Lluny del Bosc</h1>
        <button class="bg-orange-500 hover:bg-orange-400 w-36 rounded-lg py-2">Més informació</button>
      </div>
      <div class="flex items-center z-0 flex-col gap-8">
        <iframe
          src="https://player.vimeo.com/video/668594525?h=451c5a1661&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="730"
          height="411"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Cap&amp;iacute;tol 2:Tornar a la Muntanya"
        ></iframe>
        <h1 class="text-center font-new text-5xl">
          capítol 2: Tornar a la Muntanya
        </h1>
        <button class="bg-orange-500 w-36 hover:bg-orange-400 rounded-lg py-2">Més informació</button>
      </div>
      <div class="flex items-center z-0 flex-col gap-8">
        <iframe
          src="https://player.vimeo.com/video/668598349?h=d324ada8f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="730"
          height="411"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Cap&amp;iacute;tol 3: Un Futur d&amp;#039;Aiguamolls"
        ></iframe>
        <h1 class="text-center font-new text-5xl">
          capítol 3: Un Futur d'Aiguamolls
        </h1>
        <button class="bg-orange-500 hover:bg-orange-400 rounded-lg w-36 py-2 mb-16">
          Més informació
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PantallaClick from "/Volumes/Bichito/codeopfe/9week/final-project/src/components/PantallaClick.vue";
export default {
  components: {
    pantallaClick: PantallaClick,
  },

  data() {
    return {
    pantalla: false,

    };
  },

  methods: {
    showPantallaClick() {
      this.pantalla = true;
    }
  }

};
</script>

<style></style>
