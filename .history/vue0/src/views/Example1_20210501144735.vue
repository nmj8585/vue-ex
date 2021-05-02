<template>
  <div>
<!--  입력폼 데이터 바인딩 - setect, checkbox,radio
 1.select 바인딩
 2.checkbox 바인딩
 3.radio 바인딩 -->
  <select v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
  </div>
</template>

<script>
export default {
 data () {
     return {
       city: ""
     }
 },
 mounted () {
 }
}
/*
1. 셀렉트 테그에 브이모델로 데이터의 선언된 시티변수연결
테그내에 옵션 테그 생성 및 벨류로 지역번호 기입 
시티 변수에 밸류값 입력 저장했더니 지정번호의 먼저 보임
빈배열이면 당연 지정한 밸류가 



*/
</script>
<style>
</style>