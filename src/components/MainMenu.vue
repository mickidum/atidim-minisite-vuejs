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
        <b-dropdown-item to="/service">First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
      <router-link class="nav-i" to="/service">שירותי הפרק</router-link>
      <router-link class="nav-i" to="/contact">צור קשר</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
