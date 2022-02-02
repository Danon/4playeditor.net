<template>
  <div ref="view"/>
</template>

<script>
import {Editor4Play} from "@riddled/4play/src/Editor.js";

export default {
  props: {
    value: {type: String, default: ''},
    placeholder: {type: String, default: ''},
    autocompleteSource: {type: Function, default: () => []}
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
        {
          onChange: content => this.$emit('input', content),
          onSubmit: content => console.log("Submitted a document"),
          onCancel: cancel => console.log("Canceled a document"),
          onStateChange: state => this.$emit('state', state),
        },
        username => this.autocompleteSource(username),
        'Brak oznacznika'
    );
  },

  methods: {
    makeBold() {
      this.editor.putBold();
    },
    makeItalics() {
      this.editor.putItalics();
    },
    makeStrikeThrough() {
      this.editor.putStrikeThrough();
    },
    makeUnderline() {
      this.editor.putUnderline();
    },
    makeLink(placeholder) {
      this.editor.putLink(placeholder);
    },
    makeImage(placeholder) {
      this.editor.putImage(placeholder);
    },
    insertKey(key) {
      this.editor.putKey(key);
    },
    insertBlockQuote(placeholder) {
      this.editor.putBlockQuote(placeholder);
    },
    insertCodeBlock() {
      this.editor.putCodeBlock();
    },
    addUnorderedList(placeholder) {
      this.editor.putListUnordered(placeholder);
    },
    addOrderedList(placeholder) {
      this.editor.putListOrdered(placeholder);
    },
    addTable(header, placeholder) {
      this.editor.putTable(index => header + ' ' + (index + 1), placeholder);
    }
  },

  destroy() {
    this.editor.destroy();
  }
};
</script>
