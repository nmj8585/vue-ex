<template>
  <div>
  <!--이벤트 처리 
  1.이벤트 바인딩 이해
  2.click 이벤트 사용하기
  3.change 이벤트 사용하기 
  4.key 이벤트 사용하기  -->
  <!--이벤트: 웹화면에서 버튼클릭 ,콤보박스에서 선택한 데이터 값이 바뀐다거나
    특정 인풋 필드에서 사용자가 키패드를 이용해서 키인을 한다거나 
    이런것들이 전부 이벤트에 속한다 
    가장 많이 쓰이는건 버튼클릭-->
    <button type="button" v-on:click="increaseCounter">add 1</button>
    <p>카운트 된 값은 {{counter}}</p>
    <button type="button" v-on:click="one(), tw"></button>
  </div>
</template>

<script>
export default {
 data () {
     return {
       counter: 0,
     
     }
 },
 methods: {
   increaseCounter() {
     this.counter = this.counter + 1;
   }
 }

}

</script>
<style>
</style>