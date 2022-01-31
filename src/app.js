import Vue from 'vue';

import Application from './Application.vue';
import Editor from './Editor.vue';

Vue.component('v-editor', Editor);

new Vue({
  el: '#app',
  render: h => h(Application)
});
