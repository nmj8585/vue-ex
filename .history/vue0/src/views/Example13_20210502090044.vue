<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  버튼 클릭이벤트 -->
  <!-- 부모컴포넌트에서 자식컴포넌트의 메소드 실행시키기 -->
  <!-- 부모컴포넌트에서 자식컴포넌트 데이터 변경하기  -->
  <!-- 자식컴포넌트에서 부모컴포넌트로 이벤트/데이터 전달하기 -->
  <NewClick @send-message="sendmessage"/>
  <!-- 부모컴포넌트에서는 자식에서 정의된 1번 파라미터의 
  이름을 골뱅이문자와 함께 써주고 이 이벤트가 발생 했을때 
   -->
 
  </div>
</template>

<script>
import NewClick from '../components/NewClick.vue';
export default {
  components: {
     NewClick
  },
 data () {
     return {
    
     }
 },
 methods: {
   부모버튼호출() {
     this.$refs.부모에서자식.$refs.자식버튼.자식호출1();
     this.$refs.부모에서자식.자식호출1();
     this.$refs.부모에서자식.msg = '부모에서 변경한 ';
   },
   sendmessage(date) {
     alert

   }
   },
}

</script>
<style scoped>  
</style>