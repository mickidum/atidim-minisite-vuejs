<template>
  <div id="app">
    <div class="main-menu">
      <MainMenu im="logo.png" />
    </div>
    <router-view />
    <div class="short-form bottom-form">
      <div class="container">
        <h2>צרו קשר 8485* <span> / </span> 050-4455074</h2>
        <ShortForm />
      </div>
    </div>
    <div class="main-menu footer">
      <FooterMenu />
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import FooterMenu from "@/components/FooterMenu";
import ShortForm from "@/components/ShortForm";
export default {
  components: {
    MainMenu,
    ShortForm,
    FooterMenu
  }
};
</script>
