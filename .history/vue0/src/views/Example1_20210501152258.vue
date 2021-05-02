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
  <label><input type="checkbox" v-model="checked">{{checked}}</label>
  </div>
  
  </div>
</template>

<script>
export default {
 data () {
     return {
       city: "",
       checked: false,
     }
 },
 mounted () {
 }
}
/*
1. 셀렉트 테그에 브이모델로 데이터의 선언된 시티변수연결
테그내에 옵션 테그 생성 및 벨류로 지역번호 기입 
시티 변수에 밸류값 입력 저장했더니 지정번호의 먼저 보임
빈배열이면 당연 지정한 밸류가 바인딩이 된게 아니기에 
빈칸으로 선택함이 되는것 
2.라벨테그는 상표 와 같이 
여러분의 나이대를 골라보세요.<br>
    <input type="radio" name="ages" id="teen" value="teenage">
    <label for="teen">10대</label><br>
    <input type="radio" name="ages" id="twenty" value="twenties">
    <label for="twenty">20대</label><br>
코드에 체크된 값을 제출버튼으로해서 값을 넘긴다라고하면 
10대라는 곳에 체크 후 제출한다 보면 
인풋 기본값에 이름 인풋테그의 id 벨류: 넘길 값 으로 설정된 상태이고
라벨태그에서 인풋테그의 이름 즉 id의 값을 부여 받고 
체크된 행동(이벤트)에 따라 위에 설정된 값이 서버로 넘어가 
저장되는 방식이다 .(여기서는 인풋에 이름 과  밸류가 넘어간다.
ages=teenage)
결국은 무언가를 문의해보는 양식이고 그 무엇이 테그의 공통적인 
문의 : 여기서는 나이 그 나이의 값이 무엇이냐 라는것이기에 이렇께
구조가 되여있다 

<input> 태그는 사용자로부터 입력을 받을 수 있는 입력 필드(input filed)를 정의할 때 사용합니다.
<input> 요소는 사용자가 데이터를 입력할 수 있는 입력 필드를 선언하기 위해 <form> 요소 내부에서 사용됩니다.
이러한 입력 필드는 <input> 요소의 type 속성값을 달리함으로써 여러 가지 모양으로 나타낼 수 있습니다.
<input> 요소는 빈 태그(empty tag)이며, 속성만을 포함하고 있습니다.
<label> 요소를 사용하면 <input> 요소의 라벨(label)을 정의할 수도 있습니다.


다시  돌아와서  작성된것을 풀어보면 
위처럼 무언가 문의가 있어 체크를하여 표시하는 그런 행위를 하는 속성
을 넣고 v-모델: 체크 및 해제 행위 감지 연결 
데이터 바인딩의 값으로  기본행동값 감시 여기서는 트루가 행동에
대한 기본값
행동의값(행동의값 체크 및 헤제)이 기본설정값(기본값 데이터의 정의된)
에 서로 연동 방응하는 사항 
인풋타입 체크박스는 체크와헤제 2사항만 가지고 있어서 
값이없으면 에러가난다.








*/
</script>
<style>
</style>