<template>
  <h1 class="text-center text-white pt-8 font-new pl-10 mt-20 text-5xl">
    Afegeix un comentari
  </h1>

  <div class="container w-[900px] flex flex-col mb-10">
    <input
      type="text"
      placeholder="Nom"
      class="bg-white pl-4 py-1 rounded-lg self-start mt-10 mb-5"
      v-model="author"
    />
    <textarea
      name="comentaris"
      id="comentaris"
      placeholder="Deixa un comentari"
      cols="30"
      rows="5"
      maxlength="600"
      class="w-full px-4 rounded-lg py-4"
      v-model="descripcio"
    ></textarea>

    <button
      class="bg-orange-500 hover:bg-orange-400 text-center w-36 text-white mt-6 self-center rounded-lg py-2"
      @click="storeAuthor"
    >
      Envia
    </button>
  </div>

  <h1 class="text-center text-white pt-8 font-new pl-10 text-5xl">
    Comentaris
  </h1>

  <textarea
    name="comentaris"
    id="comentaris"
    placeholder="Deixa un comentari"
    cols="30"
    rows="5"
    maxlength="600"
    class="w-full px-4 rounded-lg py-4"
  ></textarea>
  <textarea
    name="comentaris"
    id="comentaris"
    placeholder="Deixa un comentari"
    cols="30"
    rows="5"
    maxlength="600"
    class="w-full px-4 rounded-lg py-4"
  ></textarea>
</template>

<script>
import { getInfo, storeData } from "../firebase";
export default {
  data() {
    return {
      author: "",
      descripcio: "",
      comentari: [],
      date: null,
      id: null,
    };
  },

  methods: {
    storeAuthor() {
      this.comentari.push(this.author);
      storeData(
        `capitols/${this.$route.params.id}/${comentaris[0]}/author`,
        this.author
      );
    },
  },
};
</script>
