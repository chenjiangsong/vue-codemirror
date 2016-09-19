<template>
    <textarea v-el:editor></textarea>
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
                    lint: true,
                    gutters: ['CodeMirror-lint-markers'],
                    readOnly: readOnly ? 'nocursor' : false,
                    tabSize: 2,
                    styleActiveLine: true
                })
            }
        }
    };
</script>
<style>
</style>
