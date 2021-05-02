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
  </div>
</template>

<script>
export default {
 data () {
     return {
       x1: '재석',
       x2: '유',
       y: '',
     
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