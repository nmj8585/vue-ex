<template>
  <div>
  <!--랜더링 문법
  1.랜더링 문법 이해
  2.v-if 사용하기
  3.v-show 사용하기
  4.v-if 와 v-show 차이 정확히 이해하기
  -->
  <!--조건에 따라 보이고 않보이고 하게 하는걸 랜더링문법
    vue에서는 직관적이고 쉽게사용할수있다. -->
  <h1 v-if="bRender">bRender의 값이 true이면 h1의 블록 화면에 보여지게 됩니다.</h1>
  <!-- vue에서 랜더링문법을 사용하는경우는 2가지 v-if 와 v-show  -->
   <h1 v-else>bRender의 값이 false이면 h1의 블록 화면에 보여지게 됩니다.</h1>
    <div>
      <h1 v-if="type=='A'">A조건</h1>
      <h1 v-else-if="type=='b'">B조건</h1>
      <h1 v-else-if="type=='C'">C조건</h1>
      <h1 v-else>무조건</h1>
      <!--결국 조건에 따라 보이고 않보이고를 만들수있다
      동일하냐 동일하진않지만 이것이냐 다 아니냐 
      코드는 위에서 아래로 내려오면서 수행되니까.. -->
    </div>
    <div>
      <h1 v-show="bRender1">와우쇼</h1>
      <!-- 야도 트루 펄스로 보이고 않보이게 가능 -->
    </div>
  <!-- 가장큰 차이는 v-if는 조건에 맞는것만 화면에 랜더링 되면서
       조건에 맞지않게 작성된 코드는 HTML에 랜더링되지않는다
       v-show 의경우 변수의 조건값을 펄스로 해놓으면
       화면에 랜더링되지않지만 개발자도구로 코드를살펴보면
       HTML에서 디스플레이 논으로 해서 코드는 보이나
       조건으로 화면에는 보이지않게하는 상황이다.
      <h1 style="display: none;">와우쇼</h1>
      이와같이 화면에 보이진않으면서 코드는 랜더링이되여
      컨텐츠가 보이지않게만 처리한게 된다
      만약 랜더링을 제어해야하는 그객체 HTML이  초기에 조건에
      의해 보였다 않보였다 하는거라면 v-   -->
  </div>
</template>

<script>
export default {
 data () {
     return {
       bRender: false,
       type: 'C',
       bRender1: true,
    

     
     }
 },
}

</script>
<style>
</style>