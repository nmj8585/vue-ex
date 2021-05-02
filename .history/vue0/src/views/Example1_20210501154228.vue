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
  <!--  -->
  </div>
   <label><input type="checkbox" value="서울" v-model="checked">서울</label>
   <label><input type="checkbox" value="부산" v-model="checked">부산</label>
   <label><input type="checkbox" value="제주" v-model="checked">제주</label>
    <br>
    <span>살고싶은곳은 : {{checked}}</span>
  <div>

  <label><input type="radio" value="서울" v-model="picked">서울</label>
  <label><input type="radio" value="부산" v-model="picked">부산</label>
  <label><input type="radio" value="제주" v-model="picked">제주</label>
  <br>
  <span>선택한 지역 : {{picked}}</span>
  </div>
  </div>
</template>

<script>
export default {
 data () {
     return {
       city: true,
       checked: [],
       picked:  ""
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

추가로 만든게 데이터가 연결이되여 하나를 눌러도 다체크가 됬는데
배열로 변경하니 체크한것이 기존만든것에 보이는중

배열로 변경하니 담고싶은만큼의 정보를 넣고 바인딩이된 데이터 에
담긴 값을 꺼내서 보여주는 것
전에는 행동이 하고싶었고 행동에대한 정보가 담긴곳이 연결되여서 
행동이 지정된 값이 달라지면 행동을 한부분 

정보가 많을때는 배열로 하는게 실제로도 많이 쓰인다 
그리고 배열에 담긴 정보에 따라서 보이고자하는 알고자하는 부분이 달라지기때문에
어떤정보를 담고 그정보만 추출하냐가 관건

3.


*/
</script>
<style>
</style>