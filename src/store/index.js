/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {
        name: 'Background',
        value: 'back-gray',
        option: 'backgrounds',
      },
      {
        name: 'Circle',
        value: 'circle-blue',
        option: 'circles',
      },
      {
        name: 'Header',
        value: '',
        option: 'headers',
      },
      {
        name: 'Image',
        value: 'image-vue',
        option: 'images',
      },
    ],
    options: {
      backgrounds: [
        {
          id: 'back-black',
          name: 'Black',
        },
        {
          id: 'back-blue',
          name: 'Blue',
        },
        {
          id: 'back-gray',
          name: 'Gray',
        },
        {
          id: 'back-white',
          name: 'White',
        },
        {
          id: 'back-yellow',
          name: 'Yellow',
        },
      ],
      circles: [
        {
          id: 'circle-black',
          name: 'Black',
        },
        {
          id: 'circle-blue',
          name: 'Blue',
        },
        {
          id: 'circle-green',
          name: 'Green',
        },
        {
          id: 'circle-red',
          name: 'Red',
        },
      ],
      headers: [
        {
          id: 'header-vue-left-down',
          name: 'Left Down',
        },
        {
          id: 'header-vue-left-up',
          name: 'Left Up',
        },
        {
          id: 'header-vue-right-down',
          name: 'Right Down',
        },
        {
          id: 'header-vue-right-up',
          name: 'Right Up',
        },
        {
          id: '',
          name: 'Default',
        },
      ],
      images: [
        {
          id: 'image-medellin',
          name: 'Medellin',
        },
        {
          id: 'image-vue',
          name: 'Vue.js',
        },
      ]
    },
  },
  actions: {},
  mutations: {},
  getters: {},
});

export default store;
