<template>
  <div>
  <!-- 리스트 랜더링
  1.v-for 디렉티브 (vue)
  2.select 옵션 랜더링
  3.table 리스트 랜더링
  -->
    <select>
      <option v-bind:value="city.v" :key="i" v-for="(city, i) in options">
        {{city.t}}</option>  
    </select>
    <!--셀렉트 값이들어가 있는버튼 내렸을떄 선택가능 
      v-for문 끝에서보면 아래선언된 옵션즈라는 변수에는 배열로 
      객체를 만들어 밸류값과 타이틀 값을 넣고 저장을 한상태 
        -->
  </div>
</template>

<script>
export default {
 data () {
     return {
       options: [
         {v:'02', t:'서울'},
         {v:'21', t:'부산'},
         {v:'064', t:'제주'},
       ],
      

     
     }
 },
}

</script>
<style scoped>
</style>