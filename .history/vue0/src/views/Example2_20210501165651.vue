<template>
  <div>
  <!--  속성(attribute)에 바인딩
  1.속성에 데이터 바인딩 하는 방법 알기
  2.img src에 바인딩 
  3.버튼 disabled에 바인딩 -->

    <!-- <img v-bind:src="ulrlogo" style="height:200px;width:auto;" /> -->
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''" >clikc</button>
    <button type="button" v-bind:disabled="false">clikc</button>
    <button type="button">눌러여</button>
    <button type="button" disabled>안눌려요</button>
    <!-- 조건이 맞는경우에만 눌리게
    값이 들어가면 클릭이 가능해진다. 
    금방끝나서 그렇지 정리하자면 
    인풋테그에 텍스트 타입의 값이 브이모델에 연결된 변수에
    값이 입력이 되면 버튼테그의 버튼이 열리는데 그것은
    버튼 테그의 속성인 disabled에 데이터바인드 해놓고
    즉 속성을 바인드해 놓은 상태임 속성이 사용이 되는조건은
    바인드가 아닌상황에서는 비활성화 버튼이지만
     -->
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