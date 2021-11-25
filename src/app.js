import Vue from 'vue';
import {ToggleButton} from 'vue-js-toggle-button';

import Application from './Application.vue';
import Editor from './Editor.vue';

Vue.component('v-toggle-button', ToggleButton);
Vue.component('v-editor', Editor);

new Vue({
  el: '#app',
  render: h => h(Application)
});
