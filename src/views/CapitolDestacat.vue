<template>
<div>
<img src="../../public/img/earth.spinner.gif" alt="loading" v-if="loading = false" class="h-44 py-6 bg-white/60 rounded-full">
</div>
  <div class="flex mb-20">
    <div v-if="title" class="flex pt-2 gap-2 items-center flex-col">
      <h1 class="text-center text-white pt-8 font-new pl-10 text-5xl">
        {{ title }}
      </h1>
      <RouterLink
        to="/capitols"
        class="hover:text-3xl text-white/70 font-new text-2xl px-4 py-1"
        >Torna a Capítols</RouterLink
      >
      <iframe
        v-if="video"
        :src="`${video}`"
        width="1000"
        height="563"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Cap&amp;iacute;tol 1: 
Lluny del bosc"
      ></iframe>
      <div class="flex gap-[360px]">
        <div class="flex items-center gap-4">
          <h4 class="text-white text-3xl">
            {{ counter }}
          </h4>
          <button>
            <i
              class="fa-solid fa-heart text-white hover:text-orange-500 text-4xl"
              @click="addLikes"
            ></i>
          </button>
          <button>
            <i
              class="fa-solid fa-heart-crack text-white hover:text-orange-500 text-2xl"
              @click="removeLikes"
            ></i>
          </button>
        </div>
        <button>
          <i
            class="fa-solid fa-comment text-white hover:text-orange-500 text-4xl"
            @click="comentaris = true"
            @dblclick="comentaris = false"
          ></i>
        </button>

        <button>
          <i
            class="fa-solid fa-link text-white hover:text-orange-500 text-3xl"
            @click="copyToClipboard"
          ></i>
        </button>
      </div>
      <div
        class="bg-orange-500 text-white rounded-lg self-end p-4"
        role="alert"
        v-if="copyMessage"
        @click="copyMessage = false"
      >
        <div class="flex gap-6">
          <div class="flex flex-col">
            <p class="font-bold">S'ha copiat</p>
            <p>el link correctament.</p>
          </div>
          <button
            class="text-center self-center bg-orange-400 px-4 py-3 hover:bg-orange-300 rounded-full"
          >
            ok
          </button>
        </div>
      </div>
      <Comentaris v-if="comentaris" />
    </div>
  </div>
</template>

<script>
import Comentaris from "../components/Comentaris.vue";
import { getInfo, storeData } from "../firebase";
export default {
  components: {
    Comentaris: Comentaris,
  },
  data() {
    return {
      title: null,
      video: null,
      comentaris: false,
      counter: 0,
      loading: false,
      error: null,
      copyMessage: false,
      timeout: null,
    };
  },
  mounted() {
    this.loading = true;
    this.getInfoTitle();
    this.getInfoVideo();
    this.getInfoLikes();
  },

  methods: {
    addLikes() {
      this.counter++;

      storeData(`capitols/${this.$route.params.id}/likes`, this.counter);
      this.getInfoLikes();
    },
    removeLikes() {
      this.counter--;

      storeData(`capitols/${this.$route.params.id}/likes`, this.counter);
      this.getInfoLikes();
    },
    copyToClipboard() {
      this.copyMessage = true;
      navigator.clipboard.writeText(
        `http://localhost:3000/capitols/${this.$route.params.id}`
      );
    },
    async getInfoTitle() {
      this.title = await getInfo(`capitols/${this.$route.params.id}/title`);
    },

    async getInfoVideo() {
      this.video = await getInfo(`capitols/${this.$route.params.id}/video`);
    },

    async getInfoLikes() {
      this.counter =
        (await getInfo(`capitols/${this.$route.params.id}/likes`)) || 0;
    },
  },
};
</script>
