<template>
  <div>
  <!-- 컴포넌트에서 다른컴포넌트 사용하기
  1.컴포넌트 안에서 다른컴포넌트 사용하기
  2.컴포넌트를 사용한다는것에 대한 의미알기 
  컴포넌트 재활용 컴포넌트 안에서 활용하는 것
  -->
   <pegeTitle />
   <!-- 하나의 컴포넌트에 불가하지만 
        실무에서 엄청 중요한 컴포넌트 이다. 
        대형프로젝트를 하게되면 컴포넌트는수백개
        수십명의 개발자가 투입되는데 각자의 설정과
        꾸밈이 달라 사용자가 접속했을때 보는
        페이지마다 색상과 폰트 크기가 다르다면 
        안돼기에 이렇게 페이지 타이틀이라는 
        ui를 만들어 놓고 -->
  </div>
</template>

<script>
import PegeTitle from '../components/pageTitle.vue';
export default {
  components: {
    PegeTitle,
  },
 data () {
     return {
       isActive: true,
       isRed: true,
       

     
     }
 },
}

</script>
<style scoped>  
</style>