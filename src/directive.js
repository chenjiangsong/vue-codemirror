import Vue from 'vue'

Vue.directive('test', {
  twoWay: true,
  bind: function () {
   this.handler = function () {
     // 将数据写回 vm
     // 如果指令这样绑定 v-example="a.b.c"
     // 它将用给定值设置 `vm.a.b.c`
     this.set(this.el.value)
   }.bind(this)
   this.el.addEventListener('input', this.handler)
 },
 unbind: function () {
   this.el.removeEventListener('input', this.handler)
 },
 update: function() {
   console.log(111);
 }
})
