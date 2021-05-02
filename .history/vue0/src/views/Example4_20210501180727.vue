<template>
  <div>
  <!-- 리스트 랜더링
  1.v-for 디렉티브 (vue)
  2.select 옵션 랜더링
  3.table 리스트 랜더링
  -->
    <select>

    </select>
  </div>
</template>

<script>
export default {
 data () {
     return {
       options: [
         {v:'02', t:'서울'},
         {v:'21', t:'부산'},
         {v:'02', t:'제주'},
       ],
      

     
     }
 },
}

</script>
<style scoped>
</style>