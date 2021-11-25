<template>
  <div ref="view"/>
</template>

<script>
import {Editor4Play} from "@riddled/4play/src/Editor.js";

export default {
  props: {
    value: {type: String, default: ''},
    placeholder: {type: String, default: ''},
    autocompleteSource: {type: Function, default: () => []},
    convert: {type: Boolean, default: false},
  },

  data() {
    return {
      editor: null
    };
  },

  mounted() {
    this.editor = new Editor4Play(
        this.$refs.view,
        this.placeholder,
        this.value,
        content => this.$emit('input', content),
        pasteAsMarkdown => pasteAsMarkdown(this.convert),
        file => this.$emit('image', file),
        content => console.log("Submitted a document"),
        cancel => console.log("Canceled a document"),
        username => this.autocompleteSource(username));
  },

  methods: {
    insertImage(href, title) {
      this.editor.insertImage(href, title);
    },
    makeBold() {
      this.editor.makeBold();
    },
    makeItalics() {
      this.editor.makeItalics();
    },
    makeStrikeThrough() {
      this.editor.makeStrikeThrough();
    }
  },

  destroy() {
    this.editor.destroy();
  }
};
</script>
