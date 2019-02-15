<template>
  <div id="app">
    <Preloader v-if="!loaded"/>
    <div v-if="loaded" class="full-app">
      <div class="main-menu">
        <MainMenu im="logo.png"/>
      </div>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.params.id"/>
      </transition>
      <div class="short-form bottom-form">
        <div class="container">
          <h2>
            <span>צרו קשר 8485*</span>
            <span class="hfm">/</span>
            <span>050-4455074</span>
          </h2>
          <FooterForm/>
        </div>
      </div>
      <div class="main-menu footer">
        <FooterMenu/>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import FooterMenu from "@/components/FooterMenu";
import FooterForm from "@/components/FooterForm";
import Preloader from "@/components/Preloader";
import axios from "axios";
export default {
  components: {
    MainMenu,
    FooterForm,
    FooterMenu,
    Preloader
  },
  data() {
    return {};
  },
  computed: {
    loaded() {
      return this.$store.getters.loaded;
    }
  },
  mounted() {
    this.getFromApi();
  },
  methods: {
    async getFromApi() {
      try {
        const { data } = await axios.get(
          "https://naon-serv.co.il/test/octobercms/api/buildings"
        );
        // console.log(data);
        this.$store.dispatch("fillStore", data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>
