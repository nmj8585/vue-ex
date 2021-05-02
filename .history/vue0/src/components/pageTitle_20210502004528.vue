<template>
  <div>
      <h1>이건일반테그에 컨텐츠 내용 입니다</h1>
      <h1 class="page-title">{{title}}</h1>
  </div>
  <!-- props 의 필드를 정의를 할건데  data에 정의해서 필드를 이용했듯이
       props 라는것은 페이지타이틀이라는 호출하는곳에서 데이터를
       던저주는것을 페이지타이틀에서 받을 데이터를 정의하는곳이 
       props 
       데이터의 변수의 키값 처럼 props가 (data) title(변수)가된다고
       이해하면 된다    -->
       <!-- 타이틀을 객체체형식으로 하여서 내용을 보면
       타입의 값은 스트링(문자형)이고 기본값은 디폴트라는
       곳에 문자열로 해놓은게 위에 바인딩된곳으로 연결된상태
       부모컴포넌트에서 데이터를 전달해주지 않더라도
       기본적으로 디폴트 값이 보이는상황 -->
</template>

<script>
export default {
    props: {
        title: {
        type: String,
        default: '페이지 타이틀 입니다!!!!(디폴트값)',
        }
    }
}
</script>

<style scoped>
.page-title {
    padding-right: ;

}

</style>