<template>
  <div>
<!--  입력폼 데이터 바인딩 - setect, checkbox,radio
 1.select 바인딩
 2.checkbox 바인딩
 3.radio 바인딩 -->
  <!-- <select v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select> -->
  <div>
  <label><input type="checkbox" v-model="city">선택{{city}}</label>
  <!-- 체크 한다 안한다  -->
  </div>
   <label><input type="checkbox" value="서울" v-model="checked">서울</label>
   <label><input type="checkbox" value="부산" v-model="checked">부산</label>
   <label><input type="checkbox" value="제주" v-model="checked">제주</label>
    <br>
    <span>살고싶은곳은 : {{checked}}</span>
    <!--체크박스의 쓰임  다중선택
    체크된곳의 밸류의 값 스트링이 데이터의 정의해놓은 변수에 담겨서
    그 담긴 값을 보여주는것   -->
  <div>
  <label><input type="radio" value="서울" v-model="picked">서울</label>
  <label><input type="radio" value="부산" v-model="picked">부산</label>
  <label><input type="radio" value="제주" v-model="picked">제주</label>
  <br>
  <span>선택한 지역 : {{picked}}</span>
  <!--라디오박스의 쓰임 그중에 하나 
   인풋 의값 벨류의 이름이 선택한 체크행동이 감지된 곳의 벨류가 
   브이모델 바인드된 곳으로 들어가 그 값을 선택지역 바인드된곳의 호출됨  -->
  </div>
  <div>
  <label><input type="radio" v-bind:value="radio1" v-model="picked1">서울</label>
  <label><input type="radio" v-bind:value="radio2" v-model="picked1">부산</label>
  <label><input type="radio" v-bind:value="radio3" v-model="picked1">제주</label>
  <br>
  <span>선택한 지역2 : {{picked1}}</span>
  <!--라디오박스의 쓰임 그중에 하나 
  바인딩이 된 값이 담긴 변수를 찾아서 변수에 담긴 스트링(값을)확인후 
  가져와서 다시 브이모델에 담아 그 담긴 값을 호출됨  -->
  </div>
  <div>
  <label><input type="radio" v-bind:value="citypicked[0]" v-model="picked2">서울</label>
  <label><input type="radio" v-bind:value="citypicked[1]" v-model="picked2">부산</label>
  <label><input type="radio" v-bind:value="citypicked[2]" v-model="picked2">제주</label>
  <br>
  <span>선택한 지역3 : {{picked2}}</span>
  <!--라디오박스의 쓰임 그중에 하나 
  바인딩이 된 값이 담긴 변수를 찾아서 변수에 배열형태로 담긴 순서를 확인 후 
  스트링(값을)확인 확인된값을가져와서 다시 브이모델에 담아 그 담긴 값을 호출됨  -->
  </div>
  </div>
</template>

<script>
export default {
 data () {
     return {
       city: false,
       checked: [],
       picked:  "",
       radio1: "서울",
       radio2: "부산",
       radio3: "제주",
       picked1:  "",
       citypicked: ["서울","부산","제주"],
       picked2:  "",
     }
 },
 mounted () {
 }
}

</script>
<style>
</style>