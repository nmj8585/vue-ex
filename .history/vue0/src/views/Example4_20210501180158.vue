<template>
  <div>
  <!-- 리스트 랜더링
  1.클래스에 데이터 바인딩
  2.스타일에 데이터 바인딩
  -->
  </div>
</template>

<script>
export default {
 data () {
     return {
       isActive: true,
       isRed: true,
       activeclass: 'active',
       redclass: 'text-red',
       styleobject: {
         backgroundColor : 'pink',
         color: 'blue',
         fontWeight: 'bold'
       },
       baseStyle: 'background-color:yellow;width:400px;height:200px;',
       addStyle: 'color:red;font-weight:bold;',

     
     }
 },
}

</script>
<style scoped>
.container {
  width: 400px;
  height: 200px;
  }
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}  
</style>