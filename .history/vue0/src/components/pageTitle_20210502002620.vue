<template>
  <div>
      <h1>페이지 타이틀 입니다.</h1>
  </div>
  <!-- props 의 필드를 정의를 할건데  data에 정의해서 필드를 이용했듯이
       props 라는것은 페이지타이틀이라는 호출하는곳에서 데이터를
       던저주는것을 페이지타이틀에서 받을 데이터를 정의하는곳이 
       프로포스  -->
</template>

<script>
export default {
    props: {
        title: {
        type: String,
        default: '페이지 타이틀 입니다!!!!',
        }
    }
}
</script>

<style>

</style>