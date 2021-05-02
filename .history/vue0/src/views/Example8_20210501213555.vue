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
   <input type="text" v-model="y">


  <input type="text" v-model.number="x3">
  <input type="text" v-model.number="x4">
  <input type="text" v-model.number="y1">

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