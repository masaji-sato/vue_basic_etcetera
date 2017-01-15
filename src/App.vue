<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!-- https://vuejs.org/v2/guide/forms.html -->
    <h2>Form Input Bindings</h2>
    <p><a href="https://vuejs.org/v2/guide/forms.html" target="_blank">https://vuejs.org/v2/guide/forms.html</a></p>
    <h3>text</h3>
    <div>
      <p>v-modelの使用時に、value値で初期値をいれるとエラー</p>
      <!-- <p>value属性をつけてみる<input v-model="message" value="initial value" /></p> -->
      <p><input v-model="message" /></p>
      <p>{{ message }}</p>
    </div>
    <h3>checkbox</h3>
    <p>
      <p><input type="checkbox" v-model="checked" /></p>
      <p>{{ checked }}</p>
      <p v-if="checked">チェックされた</p>
    </p>
    <h3>ラジオ</h3>
    <p><input type="radio" v-model="pick" v-bind:value="a"></p>
    <p>{{pick}}</p>
    <p>{{a}}</p>

    <h3>trim</h3>

    <p><input v-model.trim="msg"></p>
    <p>{{ msg }}</p>

    <h3>number</h3>
    <input v-model.number="age" type="number">
    <p @click="inputCheck">input check</p>

    <div>
      <select v-model="selected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selected }}</span>
    </div>

    <!-- https://vuejs.org/v2/guide/events.html -->
    <h2>Event Handling</h2>
    <p><a href="https://vuejs.org/v2/guide/events.html" target="_blank">https://vuejs.org/v2/guide/events.html</a></p>
    <div v-on:click="clickMe">クリック1</div>
    <div @click="clickMe">クリック2</div>
    <div @click="clickMe2('hello', $event)">クリック3</div>

    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <!-- dataの参照の仕方テスト -->
    <h2>dataの参照の仕方</h2>
    <div v-if="this.$data.visible">
      値を"this.$data.visible"で書いてみる
    </div>
    <div v-if="visible">
      値を"visible"で書いてみる
    </div>
    <div v-if="this.visible">
      値を"this.visible"で書いてみる
    </div>
    <div>
      <p>{{ helloWorld }}</p>
    </div>

    <!-- parentoからのデータ受け取り -->
    <h2>propsの確認</h2>
    {{ a }}

    <!-- https://vuejs.org/v2/guide/computed.html -->
    <h2>computedのテスト</h2>
    <p><a href="https://vuejs.org/v2/guide/computed.html" target="_blank">https://vuejs.org/v2/guide/computed.html</a></p>
    {{ nowm() }}
    {{ nowm() }}
    {{ now }}
    {{ now }}
    <p>computedは、値が変更したときのみ実行される（cacheされる）上記のnowは一度しかコールされていないことを確認</p>

    <p>{{ reverse }}</p>
    

    <h2>v-forのテスト</h2>
    <div>
      <div v-for='item in list'>{{item}}</div>
    </div>
    <div>
      <h2>カスタムコンポーネントリストのテスト</h2>
      <list v-for='item in list' v-bind:hu='item'></list>
    </div>

    <!-- https://vuejs.org/v2/guide/list.html#v-for-with-v-if -->
    <h2>v-for with v-if</h2>
    <p><a href="https://vuejs.org/v2/guide/list.html#v-for-with-v-if" target="_blank">https://vuejs.org/v2/guide/list.html#v-for-with-v-if</a></p>
    <p>v-forディレクティブとv-ifディレクティブを同じ要素に書くとv-ifでtrueのものだけ表示可能</p>
    <p v-for='item in items' v-if='item.complete'>{{item.text}}</p>

    <!-- https://vuejs.org/v2/guide/class-and-style.html -->
    <h2>スタイルテスト</h2>
    <p><a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">https://vuejs.org/v2/guide/class-and-style.html</a></p>
    <p>Object syntaxとArray Syntaxがある</p>
    <p v-bind:class='{active: isActive, danger: isDanger}'>テキスト</p>
    <p v-bind:class='[{active: isActive}, {danger: isDanger}]'>テキスト</p>

    <!-- https://vuejs.org/v2/guide/conditional.html -->
    <h2>v-showのテスト</h2>
    <p v-show="ok">v-showがtrue</p>
    <p>v-showはfalseの場合disableのスタイルが当たっていることを確認</p>

    <hello></hello>
    <br />

    <!--  -->
    <h2>filtersのテスト</h2>
    <div>{{ message | aaa | bbb }}</div>


    <div v-bind:title="message | aaa">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </div>

    <!--  -->
    <h2>javascriptのexpressionが動作する確認</h2>
    {{ visible ? 'みえる' : 'みえない' }}

    <p v-bind:id="'id-' + message">わお</p>

    <div>
      <input v-model='message'/>
    </div>

    <h2>知らなかったjavascript</h2>
    <ul>
      <li>https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent</li>
      <li>https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys</li>
      <li>https://developers.google.com/maps/documentation/javascript/adding-a-google-map</li>
    </ul>

</template>

<script>
import Hello from './components/Hello'
import List from './components/list'

var myMixin = {
  created: function () {
    this.hello()
    this.message = 'aib'
    console.log('mixin this keyword refers to ', this)
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

export default {
  mixins: [myMixin],
  name: 'app',
  components: {
    Hello, List
  },
  props: {
    a: String,
    helloWorld: String
  },
  methods: {
    nowm () {
      console.log('methods now!!!!!!!!!!!')
      return Date.now()
    },
    clickMe (event) {
      console.log('clickMe')
      console.log(this.$data.counter)
      console.log(this.counter)
      // `event` is the native DOM event
      console.log(event)
    },
    clickMe2 (str, event) {
      console.log('clickMe2')
      console.log(str)
      console.log(event)
    },
    inputCheck () {
      console.log(this.age)
      console.log(typeof age === 'number')
    }
  },
  watch: {
    message: function (newValue, oldValue) {
      console.log(newValue, oldValue)
      console.log(this)
      console.log('helloWorld=', this.helloWorld)
    }
  },
  data: function () {
    return {
      message: 'hohohohoho',
      visible: true,
      list: ['a', 'b', 'c'],
      isActive: false,
      isDanger: true,
      ok: false,
      items: [
        {text: 'task1', complete: true},
        {text: 'task2', complete: false},
        {text: 'task3', complete: true},
        {text: 'task4', complete: true}
      ],
      selected: [],
      counter: 0,
      checked: true,
      pick: '',
      age: 0,
      msg: ''
    }
  },
  created: function () {
    console.log('hello original')
    console.log(this)
    console.log(this.a)
    console.log(this.helloWorld)
  },
  filters: {
    aaa: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1) + '！！！'
    },
    bbb (value) {
      return value + '???'
    }
  },
  computed: {
    reverse: function () {
      return this.message.split('').reverse().join('')
    },
    now () {
      console.log('now!!!!!!!!!!!')
      return Date.now()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  font-weight:bold;
}
.danger {
  color: #F00;
}
</style>
