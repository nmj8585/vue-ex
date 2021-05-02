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
/* 이것은 주석 관련이다 아오 짜쯩나
비주얼스튜디오 코드 
컨트롤 + /  //1줄  */
}

</script>

<style>

</style>