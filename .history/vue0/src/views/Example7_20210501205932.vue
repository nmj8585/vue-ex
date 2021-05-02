<template>
  <div>
  <!--Computed
    vue 개발시 아주중요한 개념인 
    Computed를 이용하여 data 필드를감지하고, 새로운 필드를
    정의해서 사용하는 방법을 익힙니다.-->
  <!--만약 데이터베이스에 사용자 이름이 있다고 가정을하고 보자
    한국같은경우 성과이름을 합쳐서 저장을 많이하는데 
    외국 같은 경우 따로 나워서 구분해서 저장을한다 -->
    <h1>안녕하세요1{{lastName}}{{firstName}}.</h1>
    <!-- 데이터 바인딩 가장 기본형태  -->
    <h1>안녕하세요2{{getFullName()}}</h1>
    <!-- 데이터바인딩에 함수연결 호출  -->

  </div>
</template>

<script>
export default {
 data () {
     return {
       firstName: '재석',
       lastName: '유',
     
     }
 },
 computed: {

 },
 methods: {
   getFullName(){
     return this.lastName + this.firstName;
   }
 }
}

</script>
<style>
</style>