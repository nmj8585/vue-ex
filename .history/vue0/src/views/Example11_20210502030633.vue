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
   <PegeTitle v-bind:title="title1" 
              v-bind:likes="likes1"
              v-bind:isOk="isOk1"
              v-bind:commentIds="[1,3,4,5]"
              v-bind:author="{이름:홍길동}"/>
   <!-- 지금보고있는건 고정적인 데이터를 전달할때 이고 
        동적인데이터를 전달하고 싶을떄는 
        아래 데이터필드에 title1이라는 변수를 만들고
        거기에 값을 주고 그걸 프롭스속성에 v-바인드로
        바인딩하여 데이터필드에 선언된 title1의 값이
        변경될때마다 변화가 있을시 값을 감시하여 
        값을 재 호출해준다 
         그래서 지금 동적을 전달되고있는상황-->
   
        <!--돌아버리겠다 임포트하면 이지랄이네 ㅡㅡㅡㅡ  -->
        <!-- 어찌어찌 함 
            저거 그냥 입력하면 문자열로 들어가고
            일단 바인딩으로 하면  숫자로 온전히 들어간다
            영수가 알려주려고 했던 말이 좀이해간다.  -->
        <!--블리언 타입의 값도 일단 보임 
            바인딩없이 넣으면 텍스트 바인딩하고
            트루하면 블리언타입 
            아래 데이터 선언해서 연결해서 하면 
            트루 
            배열의경우 그냥 넣으면 배열이아니고 문자열이간것이고
            바인딩해야 문자열로 정상적으로 간다.-->
            <!--오브젝트가 겁내웃기다 ㅋㅋㅋ
            오브젝트형으로 바인딩으로 해도 에러난다  
            v-bind:author="{이름:홍길동}"   -->
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
       author: {이름:홍길동},
     }
 },
}

</script>
<style scoped>  
</style>