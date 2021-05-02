<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  버튼 클릭이벤트 -->
  <!-- 부모컴포넌트에서 자식컴포넌트의 메소드 실행시키기 -->
   <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
  <Click ref="child"/>
  <!-- 이것은 새로운 개념이다.
   위 ref= 라는것은 무엇인가 ?
   HTML을 쓰다보면 어트리뷰트(속성)중에서  id= 라는걸
   사용할수 있는데 id 라는건 자바스크립트에서 
   Document 객체는 웹 페이지 그 자체를 의미합니다.
웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때는 
반드시 Document 객체부터 시작해야 합니다.
Document 객체는 HTML 요소와 관련된 작업을 도와주는 다양한 메소드를 제공합니다.
   document.getElementById(아이디)라고해서 해당 하는 테그에
   접속을 할수있는데 vue 컴포넌트 내에서는  그자바스크립트에서
   썻던 id HTML테그에서 썼던 id에 해당하는걸 ref를 가지고 사용할수있다
   물론 id 이용할수 있다. 
   일반 HTML테그에서도 ref= 라사용할수있는데 id랑 동일하게 
   적용되는것이라 할수있다
     -->

<!-- 아래 메서드 에서보면
this.$refs.child_component.$refs.child_btn.click(); 
this.이 컴포넌트내에서 
$refs. 아이디를가진 (테그처럼 쓰는 컴포넌트에는 ref=  <<<이것)
child_component. 이름으로 등록된 컴포넌트에 접근해서 
$refs. 연결된 자식컴포넌트에 
child_btn. 이 이름으로 등록된 컴포넌트에 
childFunc(); 이이름을가진 메서드 등록함수를 호출한다.
수정을 했지만안된다 일단가자   -->
  </div>
</template>

<script>

import click from '../components/click.vue';


export default {
  components: {
      click,
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
 methods: {
   callChildFunc() {
     //this.$refs.child.$refs.childbtn.childFunc();
     this.$refs.child.$refs.
   },
}
}

</script>
<style scoped>  
</style>