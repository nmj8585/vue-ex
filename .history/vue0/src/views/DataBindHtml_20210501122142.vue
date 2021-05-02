<template>
  <div v-html="htmlString">
      {{htmlString}}
  </div>
  <!-- 어제 영수가 알려준대로 데이터 바인딩이 되는경우
  변수 컴핏티드  -->
</template>

<script>
export default {
 data () {
     return {
        htmlString: '<p style="color:red;">이것은 붉은색글씨.</p>' 
     }
 }
}
</script>

<style>

</style>