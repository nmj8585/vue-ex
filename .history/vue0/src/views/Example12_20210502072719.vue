<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
   
  -->
   <PegeTitle v-bind:title="title1" 
              v-bind:likes="likes1"
              v-bind:isOk="isOk1"
              v-bind:commentIds="[1,3,4,5]"
              v-bind:author="{이름:'강호동'}"/>

  <Click/>
  </div>
</template>

<script>
import PegeTitle from '../components/PageTitle.vue';
//import Vue from'./views/Vue1.vue';
import click from '../components/click.vue';


export default {
  components: {
      PegeTitle,
      click
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