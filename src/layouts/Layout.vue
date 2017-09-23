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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="babel">

  export default {
    name: 'layout',
  };
</script>


<style lang="scss" scoped>


</style>
