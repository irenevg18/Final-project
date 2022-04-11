<template>
  <div class="flex">
    <div v-if="data"
      class="flex pt-2 gap-2 items-center flex-col"
    >
      <h1 class="text-center text-white pt-8 font-new pl-10 text-5xl">
        hola{{ data.title }}
      </h1>
        <RouterLink to="/capitols" class="hover:text-3xl text-white/70 font-new text-2xl px-4 py-1">Torna a Capítols</RouterLink>
      <iframe
        src="https://player.vimeo.com/video/664231814?h=391783c052&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="1000"
        height="563"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Cap&amp;iacute;tol 1: 
Lluny del bosc"
      ></iframe>
      <div class="self-start items-center flex">
        <h4 class="text-white text-3xl ml-[50px]">{{ counter }}</h4>
        <i
          class="fa-solid fa-heart text-white hover:text-orange-500 text-4xl ml-4"
          @click="addLikes"
        ></i>
        <i
          class="fa-solid fa-heart-crack text-white hover:text-orange-500 text-2xl ml-4"
          @click="removeLikes"
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
import { getInfo, storeData } from "../firebase";
export default {
  data() {
    console.log("data");
    return {
      data: null,
      counter: 0,
      loading: false,
      error: null,
    };
  },
  mounted() {
    // storeData(`capitols/${this.capitol.id}`, this.capitols);
    console.log("mounted");
    this.data = getInfo("capitols");
  },
  methods: {
    addLikes() {
      this.counter = ++this.counter;

      storeData(`capitols/${this.capitol.id}/likes`, this.counter)
    },
    removeLikes() {
      this.counter = --this.counter;
    },
    copyToClipboard() {
      navigator.clipboard.writeText(
        `http://localhost:3000/capitols/${this.$route.params.id}`
      );
    },
  
  },
};
</script>

<style></style>
