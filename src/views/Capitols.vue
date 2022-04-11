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
    <div v-for="capitol in capitols" :key="capitol">
      <div class="flex flex-col gap-44 items-center text-white">
        <div class="flex flex-col items-center gap-5">
          <div>
            <h1 class="text-center font-new mb-2 text-5xl">
              {{ capitol.title }}
            </h1>
            <pantalla-click v-if="pantalla" />
            <iframe
              :src="`${capitol.videoSrc}`"
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
          <button
            class="bg-orange-500 hover:bg-orange-400 w-36 rounded-lg mb-32 py-2"
          >
            Més informació
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PantallaClick from "../components/PantallaClick.vue";
import { storeCapitols } from "../firebase";
export default {
  components: {
    pantallaClick: PantallaClick,
  },

  data() {
    return {
      pantalla: false,
      capitols: [
        {
          title: "Capítol 1: Lluny del Bosc",
          videoSrc:
            "https://player.vimeo.com/video/664231814?h=391783c052&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: {
            author: "",
            comentari: "",
            date: "",
            id: "id",
          },
        },
        {
          title: "Capítol 2: Tornar a la Muntanya",
          videoSrc:
            "https://player.vimeo.com/video/668594525?h=451c5a1661&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: {
            author: "",
            comentari: "",
            date: "",
            id: "id",
          },
        },
        {
          title: "Capítol 3: Un Futur d'Aiguamolls",
          videoSrc:
            "https://player.vimeo.com/video/668598349?h=d324ada8f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: {
            author: "",
            comentari: "",
            date: "",
            id: "id",
          },
        },
      ],
    };
  },

  methods: {
    showPantallaClick() {
      this.pantalla = true;
    },
  },
};
</script>

<style></style>
