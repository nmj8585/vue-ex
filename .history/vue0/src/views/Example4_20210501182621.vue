<template>
  <div>
  <!-- 리스트 랜더링
  1.v-for 디렉티브 (vue)
  2.select 옵션 랜더링
  3.table 리스트 랜더링
  -->
    <select v-model="city">
      <option v-bind:value="city.v" :key="i" v-for="(city, i) in options">
        {{city.t}}</option>  
    </select>
    <!--셀렉트 값이들어가 있는버튼 내렸을떄 선택가능 
      v-for문 끝에서보면 아래선언된 옵션즈라는 변수에는 배열로 
      객체를 만들어 밸류값과 타이틀 값을 넣고 저장을 한상태 
      다시 변수 옵션즈의 값들을 꺼내서 city라는 곳과 i 라는곳에 넣어준다
      각각 동일한 값이 담긴 city 와 i는 변수처럼 값을 담고 있고
      눈에 보이게 선언된건 아니지만 옵션즈 테그의 벨류로는 city내에 담겨있는 v라는 값을 
      v-bind로 데이터를 바인딩해주고 키라고하는 바인딩된 곳은 i의 담긴 값들을 바인딩을 해놓았다
      그리고 city에 담긴 값중 t라는곳에 값을 바인딩하여 꺼내여 보여준다.  -->
      <!--추가적으로 
      셀렉터 테그에 v-모델로 city라는 변수를 바인딩하고
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
       city: '064',
      

     
     }
 },
}

</script>
<style scoped>
</style>