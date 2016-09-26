import Vue from 'vue'
// require('./alias.js')
import CodeMirror from './alias'
import { isJson } from './util'

Vue.directive('test', {
  twoWay: true,
  bind: function () {
   this.handler = function () {
     this.set(this.el.value)
   }.bind(this)
   this.el.addEventListener('input', this.handler)
 },
 unbind: function () {
   this.el.removeEventListener('input', this.handler)
 },
 update: function(newValue,oldValue) {
 }
})

Vue.directive('codemirror', {
  twoWay: true,
  params: ['mode'],
  bind:function() {
    const mode = this.params.mode
    this.editor = CodeMirror.fromTextArea(this.el,{
      lineNumbers: true,
      mode: 'application/json',
      tabSize: 2
    })

    this.editor.on('change', () => {
      let value = this.editor.getValue()
      if (mode === 'json' && isJson(value)) {
        value = JSON.parse(value.replace(/[\s\r\n]/, ''))
      }
      this.set(value)
    })
  },
  update: function(newValue, oldValue) {
    this.editor.setValue(newValue || this.el.value);
  }
})
