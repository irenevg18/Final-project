<template>
  <!-- hay que poner un loading mientras se cargan los vídeos -->
  <!-- con un condicional mostrar el componente modal -->

  <div class="sticky top-0">
    <div class="flex justify-center items-center font-new px-8 py-4">
      <RouterLink to="/" class="hover:text-3xl text-white text-2xl px-4 py-1">
        inici</RouterLink
      >

      <div class="flex items-center font-bold text-white text-2xl gap-2">
        <div class="font-bold text-5xl text-white">capítols</div>

        <RouterLink to="/comentaris" class="hover:text-3xl px-4 py-1"
          >Comentaris</RouterLink
        >

        <RouterLink to="/col·laboracions" class="hover:text-3xl px-4 py-1">
          Col·laboracions
        </RouterLink>

        <RouterLink to="/projectesInteres" class="hover:text-3xl px-4 py-1">
          Projectes d'interés
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="container mx-auto mt-10">
    <div v-for="capitol in capitols" :key="capitol.id">
      <div class="flex flex-col gap-44 items-center text-white">
        <div class="flex flex-col items-center gap-5">
          <div>
            <h1 class="text-center font-new mb-2 text-5xl">
              {{ capitol.title }}
            </h1>

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
          <RouterLink
            :to="`/capitols/${capitol.id}`"
            class="bg-orange-500 hover:bg-orange-400 text-center w-36 rounded-lg mb-32 py-2"
          >
            Ves al capítol
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeData } from "../firebase";
export default {
  data() {
    return {
      capitols: {
        1: {
          title: "Capítol 1: Lluny del Bosc",
          id: 1,
          videoSrc:
            "https://player.vimeo.com/video/664231814?h=391783c052&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: [],
        },
        2: {
          id: 2,
          title: "Capítol 2: Tornar a la Muntanya",
          videoSrc:
            "https://player.vimeo.com/video/668594525?h=451c5a1661&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: [],
        },
        3: {
          id: 3,
          title: "Capítol 3: Un Futur d'Aiguamolls",
          videoSrc:
            "https://player.vimeo.com/video/668598349?h=d324ada8f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          info: "",
          likes: 0,
          comentaris: [],
        },
      },
    };
  },

  mounted() {
    storeData("capitols", this.capitols);
  },

  methods: {
    showPantallaClick() {
      this.pantalla = true;
    },
  },
};
</script>

<style></style>
