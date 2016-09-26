<template>
  <div id="app">
    <input type="text" v-test="test">
    {{test}}
    <textarea v-codemirror="code" mode="json"></textarea>
  </div>
</template>

<script>
require('./directive.js')
export default {
  data() {
    return {
      test:'1',
      code: ''
    }
  },
  ready() {
    setTimeout(() => {
      this.code = '{"a":"1"}';
    },2000)
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  /* max-width: 600px; */
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
