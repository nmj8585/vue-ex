<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기-->
   
  <Click ref="child"/>
  <!-- 이것은 새로운 개념이다.
   위 ref= 라는것은 무엇인가 ?
   HTML을 쓰다보면 어트리뷰트(속성)중에서  id= 라는걸
   사용할수 있는데 id 라는건 자바스크립트에서 
   
   document.getElementById(아이디)   -->
  </div>
</template>

<script>

import click from '../components/click.vue';


export default {
  components: {
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