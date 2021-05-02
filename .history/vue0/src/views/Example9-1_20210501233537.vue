<template>
  <div>
  <!--조회화면 ,저장화면 실습
    1.어느정도 기본문법을 배웠으니 
    활용하는 측면 및 복습하는 걸 해보자 -->
  <!-- -->
  <input type="text" v-model="userInfo.name">
  <input type="text" v-model.number="userInfo.age">
  <input type="text" v-model="userInfo.job">
  <button type="button" v-on:click="saveUserInfo">저장</button>

 </div>
</template>

<script>
export default {
 data () {
     return {
       userInfo: {
      name: '',
       age: '0',
       job: '',
       }
     
     }
 },
 
 methods: {
   seveUserInfo() {
     if(this.userInfo.name == ''){
       return alert("사용자 이름을 입력하세요");
     }
      if(this.age == 0 || this.age ==''){
       return alert("나이를 입력하세요");
     }
    const params = {
      name: this.name,
      age: this.age,
      job: this.job
    }
    const r = this.saveData(params);
    if (r == 's') {
      alert('사용자 정보가 생성됩니다');
    }

   },
    saveData(params) {
      console.log(params)
      const r = 's';
      return r;
    }
   
 }
}
</script>
<style>
</style>