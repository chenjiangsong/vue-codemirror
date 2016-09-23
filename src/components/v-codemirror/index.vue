<template>
    <div class="wrap">
      <textarea v-el:editor></textarea>
    </div>
</template>
<script>
    import CodeMirror from './alias';
    export default {
        ready () {
            const dom = this.$els.editor
            this.initEditor(dom)
        },
        methods: {
            initEditor(dom, readOnly) {
                const editor = CodeMirror.fromTextArea(dom, {
                    lineNumbers: true,
                    mode: 'application/json',
                    readOnly: readOnly ? 'nocursor' : false,
                    tabSize: 2
                })
            }
        }
    };
</script>
<style>
  .wrap{
    display: block;
    width: 500px;
    height: 300px
  }
</style>
