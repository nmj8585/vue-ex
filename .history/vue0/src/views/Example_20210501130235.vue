<template>
  <div>
      <input type="text" v-model="valueModel"/>
      <input type="number" v-model="valueModel2"/>
  </div>
</template>

<script>
export default {
 data () {
     return {
         valueModel: '와우',
         valueModel2: 1,
     }
 },
 mounted () {
     let valueModel3 = 3
     console.log(this.valueModel2);
     console.log(valueModel3);
 }
/* 위 마운트 차이점을 보면 
vue data 에 선언 변수에 접근하려면 this.를 써야 가능하고
valueModel3 의 경우 그냥일반 필드 즉 자바스크립트 에
선언된것이기 때문에 바로 사용한 상황  */


/* 이것은 주석 관련이다 아오 짜쯩나
비주얼스튜디오 코드 
컨트롤 + /  //1줄
쉬프트 + 알트 + a // 여러줄   */
// 그룹묵기  컨트롤 + k + c
// 그룹헤체  컨트롤 + K + A
}

</script>

<style>

</style>