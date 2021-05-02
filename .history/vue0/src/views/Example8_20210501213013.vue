<template>
  <div>
  <!--Watch
    1.Watch사용법 익히기
    2.computed 와 watch 비교하기
    Computed 와 유사하면서 아주아주 중요한 개념-->
  <!--Computed 라고 정의한곳에 함수를 만드는데 
    그함수가 이름자체가 데이터필드로 바로  -->
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
    <input type="text" v-model="lastName"/>
    <input type="text" v-model="firstName"/>
    <!--computed 를 통해서  fullName()이라는 함수를 만들었고
       그안에서는  lastName 과 firstName 함친것을
         fullName이라는걸 만들어주고 있다
         computed 안에 새롭게 생성된 데이터는
         그안에서 사용되는 참조하고 있는 데이터의 필드 값들을 
          변경이 일어나는지 아닌지를 항상 감시할수가 있다
           fullName을 만들기위해 리턴해서 사용한 데이터 필드가
           있다면 그 변경사항을 항시 감시하고 그 변동사항을
           항상 반영해주게 되여있다. -->
    <!--computed에 만들어진 로직에 따라서 
        데이터의 변수명과 값들은 항시 감시당하고 있고
        그의 값이 변동이 일어나면 로직에 의해 리턴 되여
        변동사항이 넘어와 반영이 된다. -->

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