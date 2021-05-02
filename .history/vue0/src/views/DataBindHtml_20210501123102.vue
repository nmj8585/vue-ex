<template>
  <div v-html="htmlString">
      {{htmlString}}
  </div>
  <!-- 어제 영수가 알려준대로 데이터 바인딩이 되는경우
  변수 컴핏티드 메서드를 찾아서 호출하는 상황  -->
  <!-- 입력폼 데이터 바인딩
  input type=text, numbrer, textarea
  1.input type=text,
  2.input type=number,
  3.input type=tex,  -->
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