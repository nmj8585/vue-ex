<template>
  <div>
      <h1>페이지 타이틀 입니다.</h1>
  </div>
  <!-- props 의 필드를 정의를 할건데  data에 정의해서 필드를 이용했듯이
       props  -->
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