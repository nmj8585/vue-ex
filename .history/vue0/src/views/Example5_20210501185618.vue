<template>
  <div>
  <!--랜더링 문법
  1.랜더링 문법 이해
  2.v-if 사용하기
  3.v-show 사용하기
  4.v-if 와 v-show 차이 정확히 이해하기
  -->
  <!--조건에 따라 보이고 않보이고 하게 하는걸 랜더링문법
    vue에서는 직관적이고 쉽게사용할수있다. -->
  <h1 v-if="bRender">bRender의 값이 보이게해주세요</h1>

  </div>
</template>

<script>
export default {
 data () {
     return {
       bRender: true,
    

     
     }
 },
}

</script>
<style>
</style>