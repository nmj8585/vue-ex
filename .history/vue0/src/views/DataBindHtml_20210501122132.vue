<template>
  <div v-html="htmlString">
      {{htmlString}}
  </div>
  <!-- 어제 영수가 알려준대로 데이터 바인딩 -->
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