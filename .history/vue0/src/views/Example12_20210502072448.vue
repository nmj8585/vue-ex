<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  1.자식 컴포넌트로 데이터전달
  2.문자데이터 전달 
  3.숫자데이터 전달
  4.boolean 데이터전달
  5.배열 데이터 전달 
  6.오브젝트 데이터 전달 
  -->
   <PegeTitle v-bind:title="title1" 
              v-bind:likes="likes1"
              v-bind:isOk="isOk1"
              v-bind:commentIds="[1,3,4,5]"
              v-bind:author="{이름:'강호동'}"/>
  
  </div>
</template>

<script>
import PegeTitle from '../components/PageTitle.vue';
//import Vue from'./views/Vue1.vue';


export default {
  components: {
      PegeTitle,
      //Vue
  },
 data () {
     return {
       title1: '부모컴포넌트에서 전송한 페이지타이틀 입니다.(ex11)',
       likes1: 40,
       isOk1: true,
       author: {이름:'홍길동',},
     }
 },
}

</script>
<style scoped>  
</style>