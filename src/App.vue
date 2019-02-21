<template>
  <div id="app">
    <Preloader v-if="!loaded" />
    <div v-if="loaded" class="full-app">
      <div class="main-menu">
        <MainMenu im="logo.png" />
      </div>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.params.id" />
      </transition>
      <div class="short-form bottom-form">
        <div class="container">
          <h2>
            <span>צרו קשר 8485*</span>
            <span class="hfm">/</span>
            <a href="tel:050-4455074"><span>050-4455074</span></a>
          </h2>
          <FooterForm />
        </div>
      </div>
      <div class="main-menu footer">
        <FooterMenu />
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import FooterMenu from "@/components/FooterMenu";
import FooterForm from "@/components/FooterForm";
import Preloader from "@/components/Preloader";
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
    this.getAllFromApi();
  },
  methods: {
    async getBuildings() {
      try {
        const { data } = await this.$http.get(
          "https://apimic.zur4win.com/api/buildings"
        );
        this.$store.dispatch("fillStore", data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async getPages() {
      try {
        const { data } = await this.$http.get(
          "https://apimic.zur4win.com/api/pages"
        );
        this.$store.dispatch("fillPages", data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async getOffices() {
      try {
        const { data } = await this.$http.get(
          "https://apimic.zur4win.com/api/offices"
        );
        this.$store.dispatch("fillOffices", data);
      } catch (err) {
        console.log(err.message);
      }
    },
    getAllFromApi() {
      this.$http.all([this.getBuildings(), this.getPages(), this.getOffices()]);
    }
  }
};
</script>
