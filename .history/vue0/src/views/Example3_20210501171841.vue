<template>
  <div>
  <!-- 클레스와 스타일에 바인딩
  1.클래스에 데이터 바인딩
  2.스타일에 데이터 바인딩
  -->
  <div class="container" v-bond:>Class Binding</div>
  </div>
</template>

<script>
export default {
 data () {
     return {
       textValue: '',
     
     }
 },
}

</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
  }
.active {
  bacground-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}  
</style>