<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <div class="container-panel" slot="container">
        <section class="customizer app-content container-fluid screen">
          <div class="row">
            <div class="customizer-options">
              <navBar class="navigation screen"></navBar>
              <div class="selector-tabs screen">
                <div class="tittle-item">
                  {{ $t('items.title') }}
                </div>
              </div>
              <div class="row">
                <ul>
                  <li class="row" v-bind:key="item.value" v-for="item in items">
                    <div class="option-name col-sm-5 col-xs-5">
                      <span>{{ item.name }}</span>
                    </div>
                    <div class="option-selection col-sm-7 col-xs-7" @click="getDetails(item.option)">
                      <span class="round-color"
                        v-bind:style="{'background-image': getImage(item.value)}">
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </v-panel>
  </v-layout>
</template>

<script lang="babel">
  import { mapGetters } from 'vuex';

  import VLayout from '@/layouts/Layout';
  import VPanel from '@/layouts/Panel';
  import NavBar from '@/components/NavBar';

  export default {
    name: 'Items',
    methods: {
      getImage(value) {
        return value ? `url(/static/${value}.png)` : null;
      },
      getDetails(option) {
        this.$router.push({ path: `/items/${option}` });
      },
    },
    computed: {
      ...mapGetters([
        'items',
      ]),
    },
    components: {
      VLayout,
      VPanel,
      NavBar,
    },
  };
</script>


<style lang="scss" scoped>
  @import '../scss/variables';

  li {
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
  }

  span {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    padding: 18px 0px 15px 8px;
    text-transform: uppercase;

    &.selection-item {
      color: $color-red;
    }
  }

  .tittle-item {
    color: #465465;
    font-size: 25px;
    font-weight: 900;
    margin: -15% -70% 10% -60%;
  }

  .custom-selector {
    height: calc(100vh - 210px);
    letter-spacing: 1px;
    overflow: auto;
    padding-right: 10px;
    width: 100%;
  }

  .round-color {
    width: 160px;
    height: 160px;
    border-radius: 15px;
    background-size: contain;
    border: 2px solid #6bb78b;
    cursor:pointer;
  }
</style>
