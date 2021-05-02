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
    <!-- 함수를호출할때 마다 연산을하는방식이라 자원소비가 심함 -->
    <h1>안녕하세요3{{fullName}}</h1>
    <h1>안녕하세요3{{fullName}}</h1>
    <!-- 연산은 1회만 하고  마치 데이터에 선언된 
          키 값 하고 완전히 동일해진다 
          마치  fullName 라는 변수선언해서 키와 값을 쓰는것처럼
          만들어서 관리가 되여있는 상태에서  10번을 쓰던 100을
          호출하던 연산은 1회에 완료되여 있음    -->
    <!-- 아래 만들은 getFullName() 에 경우 사용할떄마다 
          연산 호출이 지속된다.  -->
    <input type="text" v-model="lastName1"/>
    <input type="text" v-model="firstName1"/>
    <button type=""></button>

  </div>
</template>

<script>
export default {
 data () {
     return {
       firstName: '재석',
       lastName: '유',
       firstName1: '',
       lastName1: '',
     
     }
 },
 computed: {
   fullName() {
     return this.lastName + this.firstName;
   }

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