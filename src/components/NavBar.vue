<template>
  <nav>
    <router-link v-if="showBack" class="router-link" to="/items">{{ $t('navBar.back_button') }}</router-link>
  </nav>
</template>

<script lang="babel">
  export default {
    name: 'NavBar',
    data() {
      return {
        showBack: true,
      };
    },
    created() {
      this.showBack = this.$route.params.option;
    },
  };
</script>

<style lang="scss" scoped>

  a {
    color: #6bb78b;
    font-weight: 900;
    &:hover {
      color: #465465;
    }
  }

  nav {
    position: absolute;
    top: -40px;
  }

</style>
