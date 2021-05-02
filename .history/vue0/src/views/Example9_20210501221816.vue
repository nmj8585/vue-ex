<template>
  <div>
  <!--조회화면 ,저장화면 실습
    1.어느정도 기본문법을 배웠으니 
    활용하는 측면 및 복습하는 걸 해보자 -->
  <!-- -->
  <div>
      <select v-="" id="">
        <option v-bind:value="city.code" :key="i" v-for="(city,i) in cityList" >{{city.name}}</option>  
      </select>
      <input type="text"/>
      <button type="button">조회</button>
  </div>
 </div>
</template>

<script>
export default {
 data () {
     return {
       cityList: [
         {name:'서울',code:'02'},
         {name:'부산',code:'21'},
         {name:'제주',code:'064'},
       ],
       
     
     }
 },
 
 methods: {
 
 }
}

</script>
<style>
</style>