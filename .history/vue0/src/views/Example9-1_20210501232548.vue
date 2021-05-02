<template>
  <div>
  <!--조회화면 ,저장화면 실습
    1.어느정도 기본문법을 배웠으니 
    활용하는 측면 및 복습하는 걸 해보자 -->
  <!-- -->
  <input type="text" v-model="name">
  <input type="text" v-model.number="age">
  <input type="text" v-model="job">
  <button type="button"v-on:click>저장</button>

 </div>
</template>

<script>
export default {
 data () {
     return {
     
       name: '',
       age: '0',
       job: '',
     
     }
 },
 
 methods: {
   seveUserInfo() {
     if(this.name == ''){
       return alert("사용자 이름을 입력하세요");
     }
      if(this.age == 0 || this.age ==''){
       return alert("나이를 입력하세요");
     }
    const params = {
      name: this.name,
      age: this.age,
      job: this.job

    },
    saveData() {}
   }
 }
}
</script>
<style>
</style>