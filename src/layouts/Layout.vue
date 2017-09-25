<template>
  <div id='layout-content'>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 col-md-6 col-xs-6 col-print-12">
          <div class="pane">
            <slot></slot>
          </div>
        </div>
        <div class="col-6 col-md-6 col-xs-6 col-print-12">
          <configurator-container></configurator-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="babel">
  import ConfiguratorContainer from '@/components/ConfiguratorContainer';

  export default {
    name: 'layout',
    components: {
      ConfiguratorContainer,
    },
  };
</script>


<style lang="scss" scoped>


</style>
