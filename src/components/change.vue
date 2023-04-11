<template>
  <div>
    <div class="hello">
    <textarea  v-model="value"></textarea>
    <button @click="handleClick()">保存</button>
  </div>
  <router-link :to="{name:'show'}"> 
    去show页面
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    }
  },
  methods:{
    handleClick(){
      localStorage.setItem('value',this.value)
    },
    goto(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .hello{
  display: flex;
 }
</style>
