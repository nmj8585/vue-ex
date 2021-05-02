<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  버튼 클릭이벤트 -->
  <!-- 부모컴포넌트에서 자식컴포넌트의 메소드 실행시키기 -->
  <!-- 부모컴포넌트에서 자식컴포넌트 데이터 변경하기  -->
  <!-- 자식컴포넌트에서 부모컴포넌트로 이벤트/데이터 전달하기 -->
  <h1>{{parenMsg}}</h1>  
  <NewClick @send-message="sendmessage"/>
  <!-- 부모컴포넌트에서는 자식에서 정의된 1번 파라미터의 
  이름을 골뱅이문자와 함께 써주고 이 이벤트가 발생 했을때 
   부모컴포넌트에 메서드에 등록한 함수를 호출시켜줄것이고
   그때 전달받은 데이터(data{mag:텍스트내용)가 
   들어오고 그걸 받은 후  지정한 행동으로 실행시킨다.
   여기서는 alert로 경고창이 발생됨
   
   버튼을 클릭하는 순간(이벤트) 자식으로부터 this.mag 가 전달
   받아와서 얼럭창이 별처임. -->
 <!-- 받아온 데이터로 부터  -->
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
       parenMsg: '',
     }
 },
 methods: {
   부모버튼호출() {
     this.$refs.부모에서자식.$refs.자식버튼.자식호출1();
     this.$refs.부모에서자식.자식호출1();
     this.$refs.부모에서자식.msg = '부모에서 변경한 ';
   },
   sendmessage(date) {
     alert(date);
    this.
   }
   },
}

</script>
<style scoped>  
</style>