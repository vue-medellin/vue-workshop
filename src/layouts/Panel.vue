<template>
  <div :class="classNames">
    <div class="panel-body" v-if="hasSlot('container')">
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script lang="babel">
  import slotMixin from '@/mixins/slot';

  export default {
    name: 'panel',
    mixins: [
      slotMixin,
    ],
    props: {
      contextualStyle: {
        type: String,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['panel'];

        if (this.contextualStyle) {
          classNames.push(`panel-${this.contextualStyle}`);
        } else {
          classNames.push('panel-default');
        }

        return classNames;
      },
    },
  };
</script>
