<template>
  <div class="flex relative">
    <div
      class="flex bg-black/50 w-screen absolute pt-28 gap-2 items-center -left-[718px] -top-32 flex-col"
    >
      <h1 class="text-center text-white pt-8 font-new pl-10 text-5xl">
        capítol 1: Lluny del Bosc
      </h1>
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
        <h4 class="text-white text-3xl ml-[240px]">{{ counter }}</h4>
        <i class="fa-solid fa-heart text-white hover:text-orange-500 text-4xl ml-4" @click="addLikes"></i>
        <i class="fa-solid fa-link text-white hover:text-orange-500 ml-[840px] text-3xl" @click="copyToClipboard"></i>
      </div>
      <div class="container mx-auto mb-10 pr-[280px]">
        <input
          type="text"
          placeholder="Nom"
          class="bg-white pl-4 py-1 ml-[140px] rounded-lg self-start mt-10 mb-5"
        />
        <textarea
          name="comentaris"
          id="comentaris"
          placeholder="Deixa un comentari"
          cols="30"
          rows="5"
          maxlength="600"
          class="w-full px-4 rounded-lg ml-[140px] py-4"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      counter: 0,
    };
  },
  methods: {
    addLikes() {
      this.counter = ++this.counter;
    },
    copyToClipboard() {
    navigator.clipboard.writeText(`http://localhost:3000/capitols/${this.$route.name}`);
    },
  },
};
</script>

<style></style>
