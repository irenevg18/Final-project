<template>
  <div class="flex">
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
      <div class="items-center flex">
        <h4 class="text-white text-3xl ml-[50px]">
          {{ counter }}
        </h4>
        <i
          class="fa-solid fa-heart text-white hover:text-orange-500 text-4xl ml-4"
          @click="addLikes"
        ></i>
        <i
          class="fa-solid fa-heart-crack text-white hover:text-orange-500 text-2xl ml-4"
          @click="removeLikes"
        ></i>
        <i
          class="fa-solid fa-comment text-white hover:text-orange-500 text-4xl ml-44"
        ></i>

        <i
          class="fa-solid fa-link text-white hover:text-orange-500 ml-[750px] text-3xl"
          @click="copyToClipboard"
        ></i>
      </div>
      <div class="container w-[900px] mb-10">
        <input
          type="text"
          placeholder="Nom"
          class="bg-white pl-4 py-1 rounded-lg self-start mt-10 mb-5"
        />
        <textarea
          name="comentaris"
          id="comentaris"
          placeholder="Deixa un comentari"
          cols="30"
          rows="5"
          maxlength="600"
          class="w-full px-4 rounded-lg py-4"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfo, removeData, storeData } from "../firebase";
export default {
  data() {
    return {
      title: null,
      video: null,
      likes: null,
      counter: 0,
      loading: false,
      error: null,
    };
  },
  mounted() {
    // storeData(`capitols/${this.capitol.id}`, this.capitols);
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
      navigator.clipboard.writeText(
        `http://localhost:3000/capitols/${this.$route.params.id}`
      );
    },

    async getInfoTitle() {
      this.title = await getInfo(`capitols/${this.$route.params.id}/title`);
    },

    async getInfoVideo() {
      this.video = await getInfo(`capitols/${this.$route.params.id}/videoSrc`);
    },

    async getInfoLikes() {
      this.counter =
        (await getInfo(`capitols/${this.$route.params.id}/likes`)) || 0;
    },
  },
};
</script>

<style></style>
