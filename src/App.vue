<template>
  <div id="app">
    <div class="main-menu">
      <MainMenu im="logo.png" />
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <div class="short-form bottom-form">
      <div class="container">
        <h2>
          <span>צרו קשר 8485*</span> <span class="hfm"> / </span>
          <span>050-4455074</span>
        </h2>
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
