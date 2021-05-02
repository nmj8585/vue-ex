<template>
  <div>
  <!--  속성(attribute)에 바인딩
  1.속성에 데이터 바인딩 하는 방법 알기
  2.img src에 바인딩 
  3.버튼 disabled에 바인딩 -->

    <!-- <img v-bind:src="ulrlogo" style="height:200px;width:auto;" /> -->
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''" >clikc</button>
    <button type="button" v-bind:disabled="false">clikc1</button>
    <button type="button">눌러여</button>
    <button type="button" disabled>안눌려요</button>
    <!-- 조건이 맞는경우에만 눌리게값이 들어가면 클릭이 가능해진다. 
    1.인풋테그에 텍스트 타입의 값이 브이모델에 연결된 변수에
    값이 입력이 되면 버튼테그의 버튼이 열리는데 그것은
    버튼 테그의 속성인 disabled에 데이터바인드 해놓고
    disabled 속성이 멈추는 조건값을 지정한 상태 
    조건은 textvalue값이 텍스트,숫자 가 입력이되면 
    활성화가 되는것 
    2.clikc1 의 경우 위와같이 바인드로 속성에 걸었지만 
    조건에 false값을 줘서 바로 사용되게 한 방법
    3.원래 조건이 없을경우 그냥도 눌렸음
    4.그냥눌리던것에 -->
    
  </div>
</template>

<script>
export default {
 data () {
     return {
       urlrogo: "https://kr.vuejs.org/images/logo.png",
       textValue: '',
     
     }
 },
 mounted () {
 }
}

</script>
<style>
</style>