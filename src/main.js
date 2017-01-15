// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log('myoption=', myOption)
    }
  }
})

let data = {
  a: '5'
}

/* eslint-disable no-new */
let v = new Vue({
  data: data,
  myOption: 1,
  el: '.app',
  // template: '<App a=1 hello-world="abc" />',
  components: { App },
  created: function () {
    console.log('helo')
  }
})

console.log(v.$data === data)
console.log(v.data === data)

console.log('v.a=', v.a)
console.log('data.a=', data.a)

data.a = 54
console.log('v.a=', v.a)

v.a = 32
console.log('data.a=', data.a)
