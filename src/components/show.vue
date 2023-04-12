<template>
  <div class="hello">
   
      {{ ww }}
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed:{
    ww(){
      console.log(localStorage.getItem('value'),'123132')
      return localStorage.getItem('value')
    }
  }
}
</script>
<style>
.hello{
  font-size: 16px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 
