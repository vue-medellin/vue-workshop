<template>
  <div class="">
    <div class="images" v-for="item in items" v-bind:key="item.value"
        v-bind:style="{'background-image': getImage(item.value)}">
    </div>
  </div>
</template>

<script lang="babel">
  import { mapGetters } from 'vuex';

  export default {
    name: 'ConfiguratorContainer',
    methods: {
      getImage(value) {
        return value ? `url(/static/${value}.png)` : null;
      },
    },
    computed: {
      ...mapGetters([
        'items',
      ]),
    },
  };
</script>

<style lang="scss" scoped>

  .images {
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
  }

</style>
