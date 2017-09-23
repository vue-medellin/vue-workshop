<template>
  <section class="splash-screen">
    <figure class="main-logo">
      <img class="image-splash" src="../assets/Vue.js_Medellin_Banner_2.png">
    </figure>

    <div class='container'>
      <h1>
        {{ $t('splash.stickers_configurator') }}
      </h1>
      <p>
        <a href="https://twitter.com/VuejsMedellin" target="_blank" class="twitter">@VuejsMedellin</a>
      </p>
      <div class="button-container">
        <router-link class="position-button button -green center' router-link" to="/items">{{ $t('splash.explore_items') }}</router-link>
        <select v-model="$i18n.locale" class="select-position">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>

    </div>
  </section>
</template>

<script lang="babel">
  export default {
    name: 'SplashScreen',
  };
</script>

<style lang="scss" scoped>
  @import '../scss/buttons';
  @import '../scss/variables';

  .main-logo {
    margin-bottom: 80px;
  }

  .image-splash {
    width: 50%;
    border-radius: 15px;
    border: 10px solid $color-image-splash;
  }

  .select-position {
    font-size: 24px;
    padding: 10px;
    position: absolute;
    margin: 0 auto;
    left: -3%;
    right: -4%;
    width: 100px;
    top: 220px;
  }

  .router-link {
    transform: translateX(-50%);
    font-size: 40px;
    color: $color-dark-blue;
    cursor: pointer;
    font-weight: normal;
    line-height: 21px;
    padding: 5px 15px;
    text-decoration: none;
  }
</style>
