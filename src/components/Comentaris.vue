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
      v-model="description"
    ></textarea>

    <button
      class="bg-orange-500 hover:bg-orange-400 text-center w-36 text-white mt-6 self-center rounded-lg py-2"
      @click="storeComentari"
    >
      Envia
    </button>
  </div>
  <div class="flex flex-col" v-if="comentaris">
    <h1 class="text-center gap-4 text-white pt-8 font-new text-5xl">
      Comentaris
    </h1>

    <div v-for="comentari in comentaris" :key="comentari.id">
      <div class="flex justify-between mt-8 mx-2">
        <h4 class="text-black font-new text-xl">{{ comentari.author }}</h4>
        <div class="flex gap-4">
          <h6 class="text-lg text-orange-400 font-new">{{ comentari.hour }}</h6>
          <h6 class="text-lg text-orange-500 font-new">{{ comentari.date }}</h6>
        </div>
      </div>
      <div
        class="flex justify-between bg-white w-[1080px] px-4 rounded-lg py-4"
      >
        <p>
          {{ comentari.description }}
        </p>
        <p
          class="text-2xl text-red-500 text-center hover:text-white hover:bg-red-400 justify-end rounded-full w-8 mx-2"
          @click="deleteComentari(comentari.id)"
        >
          X
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfo, storeData } from "../firebase";
export default {
  data() {
    return {
      author: null,
      description: null,
      date: null,
      hour: null,
      id: null,
      comentaris: [],
    };
  },
  // mounted() {
  //     this.getInfoComentaris();
  // },

  methods: {
    storeComentari() {
      const today = new Date();

      this.comentaris.push({
        author: this.author,
        description: this.description,
        hour: today.getHours() + ":" + today.getMinutes(),
        date:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
        id: this.comentaris.length,
      });
      storeData(
        `capitols/${this.$route.params.id}/comentaris`,
        this.comentaris
      );
      this.author = '';
      this.description='';
      // this.getInfoAuthor();
      // this.getInfoDate();
      // this.getInfoHour();
      // this.getInfoDescription();
    },

    async getInfoAuthor() {
      this.author = await getInfo(
        `capitols/${this.$route.params.id}/comentaris/${this.id}/author`
      );
    },
    async getInfoDate() {
      this.date = await getInfo(
        `capitols/${this.$route.params.id}/comentaris/${this.id}/date`
      );
    },
    async getInfoHour() {
      this.hour = await getInfo(
        `capitols/${this.$route.params.id}/comentaris/${this.id}/hour`
      );
    },
    async getInfoDescription() {
      this.description = await getInfo(
        `capitols/${this.$route.params.id}/comentaris/${this.id}/description`
      );
    },
    //  async getInfoComentaris() {
    //   this.comentaris = await getInfo(
    //     `capitols/${this.$route.params.id}/comentaris/${this.id}`
    //   );
    // },

    deleteComentari(id) {
      this.comentaris = this.comentaris.filter(
        (coment) => coment.id !== id
      );
      

      storeData(
        `capitols/${this.$route.params.id}/comentaris`,
        this.comentaris
      );
    },
  },
};
</script>
