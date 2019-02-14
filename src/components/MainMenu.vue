<template>
  <div class="container">
    <nav>
      <router-link class="nav-i logo" to="/">
        <img src="@/assets/logo1.png" alt="logo" />
      </router-link>
      <b-dropdown
        class="nav-i"
        offset="10"
        variant="link"
        id="ddown1"
        text="משרדים להשכרה"
        no-caret
      >
        <b-dropdown-item to="/building/1">בניין 1</b-dropdown-item>
        <b-dropdown-item to="/building/4">בניין 4</b-dropdown-item>
        <b-dropdown-item to="/building/6">בניין 6</b-dropdown-item>
        <b-dropdown-item to="/building/7">בניין 7</b-dropdown-item>
        <b-dropdown-item to="/building/8">בניין 8</b-dropdown-item>
        <b-dropdown-item to="/building/10">בניין 10</b-dropdown-item>
      </b-dropdown>
      <router-link class="nav-i" to="/service">שירותי הפרק</router-link>
      <router-link class="nav-i" to="/contact">צור קשר</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
