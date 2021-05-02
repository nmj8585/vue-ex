<template>
  <div>
  <!--Watch
    1.Watch사용법 익히기
    2.computed 와 watch 비교하기
    Computed 와 유사하면서 아주아주 중요한 개념-->
  <!--Computed 라고 정의한곳에 함수를 만드는데 
    그함수가 이름자체가 데이터필드로 바로 간다  
      Computed 내에서 참조하고 있는 변화여부 항상 추적하고 
      감시하고 있다가 변경사항을 바로 반영해준다  -->
  <!-- Watch는 유사하고 다르다  -->
  <input type="text" v-model="x1">
  <input type="text" v-model="x2">
  <button type="button" v-on:click="plusNumber" >계산</button>
   <input type="text" v-model="y">
   <!-- 숫자이지만 문자열끼리 더한것처럼 나왔다
    인풋 타입 텍스트는 문자로만 인식한다 -->
  <p></p>
  <input type="text" v-model.number="x3">
  <input type="text" v-model.number="x4">
  <button type="button" v-on:click="plusNumber1" >계산</button>
  <input type="text" v-model.number="y1">
  <!-- 근데  이렇게 숫자로 인식하게끔 해줄수 있다-->
  <p></p>
  <input type="text" v-model.number="와치">
  <input type="text" v-model.number="감시">
  <input type="text" v-model.number="답변">
  <!-- watch는 computed와 다르게 computed에 새로운
        z()라는 데이터 필드를 만들어준다 했을때
         watch는 데이터필드 내에 선언 된 
         키 값만 예)x1,x2,y 데이터필드에 정의된것만 
         사용할수 있다. -->
   <!-- 엄청 편하게 쓸수 있지만  watch는 계속적으로
        변경이 일어나는지 바라보고 직접감시 있기 떄문에
        사실 굉장히 많은 자원을 소모하는 기능으로
        많이쓰면 쓸수록 성능면에서는 않좋아지니 주의하자   -->
      <!-- watch 와 computed 둘다 감시한다는 것은 
          동일하지만 computed 새로 선언된 필드의 사용된
          데이타필드의 변경사항을 감시하면서 새롭게 선언된
          필드를 갱신해주는 차이점이 존재한다.  -->
  <p></p>
  <input type="text" v-model.number="컴퓨">
  <input type="text" v-model.number="감시1">
  <input type="text" v-model.number="답변1">
  </div>
</template>

<script>
export default {
 data () {
     return {
       x1: '',
       x2: '',
      y: '',
       x3: '',
       x4: '',
       y1: '',
       컴퓨: '',
       감시1: '',
      
     
     }
 },
 watch: {
   와치() {
      this.답변 = this.와치 + this.감시
   },
   감시() {
      this.답변 = this.와치 + this.감시
   }

 },
 computed: {
   fullName() {
     return this.lastName + this.firstName;
   },
   

 },
 methods: {
   getFullName(){
     return this.lastName + this.firstName;
   },
   plusNumber(){
     return this.y = this.x1 + this.x2
   },
    plusNumber1(){
     return this.y1 = this.x3 + this.x4
   }
 }
}

</script>
<style>
</style>