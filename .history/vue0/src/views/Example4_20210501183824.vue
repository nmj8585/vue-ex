<template>
  <div>
  <!-- 리스트 랜더링
  1.v-for 디렉티브 (vue)
  2.select 옵션 랜더링
  3.table 리스트 랜더링
  -->
    <select v-model="city">
      <option v-bind:value="city.v" :key="i" v-for="(city, i) in options">
        {{city.t}}</option>  
    </select>
    <!--셀렉트 값이들어가 있는버튼 내렸을떄 선택가능 
      v-for문 끝에서보면 아래선언된 옵션즈라는 변수에는 배열로 
      객체를 만들어 밸류값과 타이틀 값을 넣고 저장을 한상태 
      다시 변수 옵션즈의 값들을 꺼내서 city라는 곳과 i 라는곳에 넣어준다
      각각 동일한 값이 담긴 city 와 i는 변수처럼 값을 담고 있고
      눈에 보이게 선언된건 아니지만 옵션즈 테그의 벨류로는 city내에 담겨있는 v라는 값을 
      v-bind로 데이터를 바인딩해주고 키라고하는 바인딩된 곳은 i의 담긴 값들을 바인딩을 해놓았다
      그리고 city에 담긴 값중 t라는곳에 값을 바인딩하여 꺼내여 보여준다.  -->
      <!--추가적으로 
      셀렉터 테그에 가장 먼저 보이는값으로 설정하기
       v-모델로 city라는 변수를 바인딩하고 
       city 변수에 지역번호에 해당하는 숫자를 입력하니 
       그지역이 가장먼저 보여지는 상황인데 
       여기에 한글을 넣으면 보이지않고 빈칸이시작이다 
       이러한 이유는 옵션에 밸류의 값으로 v에 저장되여있는
       값을 바라보기때문에 그 값중에서 넣어줘야 
       해당 기능이 수행된다.-->
       <table>
         <thead>
           <tr>
             <th>제품명</th>
             <th>제품가격</th>
             <th>배송비</th>
             <th>제품카테고리</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="product, i"></tr>
         </tbody>
       </table>
  </div>
</template>

<script>
export default {
 data () {
     return {
       options: [
         {v:'02', t:'서울'},
         {v:'21', t:'부산'},
         {v:'064', t:'제주'},
       ],
       city: '064',
       productList: [
         {product_name:'기계식 키보드', price:25000, delivery_price:3000, category:'전자제품' },
         {product_name:'마우스', price:10000, delivery_price:2000, category:'전자제품' }
       ]
      

     
     }
 },
}

</script>
<style scoped>
</style>