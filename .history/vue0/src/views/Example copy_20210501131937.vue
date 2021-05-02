<template>
  <div>
<!-- 입력폼 데이터 바인딩
  input type=text, numbrer, textarea
  1.input type=text,
  2.input type=number,
  3.input type=textarea,  -->
      <input type="text" v-model="valueModel"/>
      <input type="number" v-model.number="valueModel2"/>
      <textarea v-model="valueModel3"></textarea>
      <div>{{valueModel3}}</div>
  </div>
</template>

<script>
export default {
 data () {
     return {
         valueModel: '와우',
         valueModel2: 11232133,
         valueModel3: '안녕하세요!!!!!'
     }
 },
 mounted () {
     let valueModel0 = 3
     console.log(this.valueModel2);
     console.log(valueModel0);
 }

/* 입력폼 데이터 바인딩 - setect, checkbox,radio
 1.select 바인딩
 2.checkbox 바인딩
 3.radio 바인딩*/
}

</script>

<style>

</style>