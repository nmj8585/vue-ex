<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트로 데이터전달
  1.자식 컴포넌트로 데이터전달
  2.문자데이터 전달 
  3.숫자데이터 전달
  4.boolean 데이터전달
  5.배열 데이터 전달 
  6.오브젝트 데이터 전달 
  -->
   <pege-title v-bind:title="title1" />
   <!-- 지금보고있는건 고정적인 데이터를 전달할때 이고 
        동적인데이터를 전달하고 싶을떄는 
        아래 데이터필드에 title1이라는 변수를 만들고
        거기에 값을 주고 그걸 프롭스속성에 v-바인드로
        바인딩하여 데이터필드에 선언된 title1의 값이
        변경될때마다 변화가 있을시 값을 감시하여 
        값을 재 호출해준다 
         그래서 지금 동적을 전달되고있는상황-->
      <child-component />   

        <!--
          -->
  </div>
</template>

<script>
import PegeTitle from '../components/pageTitle.vue';
import ChildComponent from './ChildComponent.vue';
import ChildComponent from'./views/ChildComponent.vue'

export default {
  components: {
    'page-title':PegeTitle,
    'ChildComponent,
  },
 data () {
     return {
       title1: '부모컴포넌트에서 전송한 페이지타이틀 입니다.(ex11)',
       
       

     
     }
 },
}

</script>
<style scoped>  
</style>