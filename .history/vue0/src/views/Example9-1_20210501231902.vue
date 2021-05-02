<template>
  <div>
  <!--조회화면 ,저장화면 실습
    1.어느정도 기본문법을 배웠으니 
    활용하는 측면 및 복습하는 걸 해보자 -->
  <!-- -->
  <input type="text" v-model="name">
  <input type="text" v-model.number="name">
 </div>
</template>

<script>
export default {
 data () {
     return {
     
       name: '',
       age: '',
       job: '',
     
     }
 },
 
 methods: {
 }
}
</script>
<style>
</style>