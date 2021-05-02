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
       city: "064"
     }
 },
 mounted () {
   cityalert(){
     console.log(this.city)

   },
 }
}

</script>
<style>
</style>