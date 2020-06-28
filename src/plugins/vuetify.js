import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.green.base, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5,
          navbar: colors.green.base,
          info: '#ffffff'
        },
        dark: {
          // primary: 'lightgoldenrodyellow', // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
          navbar: colors.blueGrey.darken4,
          info: colors.grey.darken4
        }
        // {
        //   primary: '#1976D2',
        //   secondary: '#424242',
        //   accent: '#82B1FF',
        //   error: '#FF5252',
        //   info: '#2196F3',
        //   success: '#4CAF50',
        //   warning: '#FFC107',
        // }
      },
      dark: false
    }
  })
