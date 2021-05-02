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
    <!-- v-on으로 클릭이라는 이벤트가 발생할때 메서드의
    행동할 변수명을 기입하고 버튼을 클릭하면 바인딩 되여있는
    변수가 호출되면서 작동한다. --> 
    <button type="button" v-on:click="one(), two()">창이나오는버튼</button>
    <!-- 이건 동시에 2개의 변수를 차례대로 호출하는  -->

    <select name="" id="">
      <option value="서울"></option>
      <option value=""></option>
      <option value=""></option>
    </select>
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
   },
   one() {
     alert('one');
   },
   two() {
     alert('two');
   }
 }

}

</script>
<style>
</style>