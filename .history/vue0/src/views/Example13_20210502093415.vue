<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  버튼 클릭이벤트 -->
  <!-- 부모컴포넌트에서 자식컴포넌트의 메소드 실행시키기 -->
  <!-- 부모컴포넌트에서 자식컴포넌트 데이터 변경하기  -->
  <!-- 자식컴포넌트에서 부모컴포넌트로 이벤트/데이터 전달하기 !!-->
  <!-- 부모 컴포넌트에서 자식의 컴포넌트의 데이터 값 동기화하기 -->
  <h1>{{parenMsg}}</h1>  
  <NewClick ref="부모" @send-message="sendmessage"/>
  <button type="button" @click="showData">부모버튼</button>
<!-- 부모컴포넌트에서는 자식에서 정의된 1번 파라미터의 
  이름을 골뱅이문자와 함께 써주고 이 이벤트가 발생 했을때 
   부모컴포넌트에 메서드에 등록한 함수를 호출시켜줄것이고
   그때 전달받은 데이터(data{mag:텍스트내용)가 
   들어오고 그걸 받은 후  지정한 행동으로 실행시킨다.
   여기서는 alert로 경고창이 발생됨
   
   버튼을 클릭하는 순간(이벤트) 자식으로부터 this.mag 가 전달
   받아와서 얼럭창이 별처임. -->
 <!-- 받아온 데이터로 부터 얼럿창을 뛰우고 
 다음 행동으로 부모에 데이터에 정의해둔 변수에 
 그 데이터가 들어가고 들어간 데이터는 
 데이터 바인딩에 의해 H1테그에서 호출되여 보여짐 
 
 이번강좌는 자식컴포넌트에서 부모의컴포넌트에
 커스텀 이벤트를 실행시키면서 데이터를 전달하는 방법에 대해서 
 같이 알아본것이다.  -->

<!-- 부모 컴포넌트에서 자식의 컴포넌트의 데이터 값 항상 동기화하기
 프로그램을 개발하다보면 이런 커스텀이벤트를 만들어서 
 데이터를 전달한다는건 엄청 불편한 작업이다 
 자식컴포넌트의 정의된 데이터가 어떤값을 변경이되나 
 부모컴포넌트에서 감시를하고 캐치하려고 한다  
 그럼 굳이 자식컴포넌트에서 부모컴포넌트로 커스텀이벤트로 발생시키면서
 데이터를 전달할 필요가 없게된다 -->

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
 computed: {
   msg() {
     return this.$refs.부모.msg
   }
    },
 methods: {
   부모버튼호출() {
     this.$refs.부모에서자식.$refs.자식버튼.자식호출1();
     this.$refs.부모에서자식.자식호출1();
     this.$refs.부모에서자식.msg = '부모에서 변경한 ';
   },
   sendmessage(date) {
     //alert(date);
    this.parenMsg = date;
   },
   showData() {
     alert(this.mag);
   }
   },
}

</script>
<style scoped>  
</style>