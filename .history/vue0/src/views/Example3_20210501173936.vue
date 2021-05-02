<template>
  <div>
  <!-- 클레스와 스타일에 바인딩
  1.클래스에 데이터 바인딩
  2.스타일에 데이터 바인딩
  -->
  <!-- <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">
    Class Binding</div> -->
  <!--
  1.클레스에 클레스를 추가를하면 추가가 됨 
  오타내서 죽는줄 -->
    <!--  <div class="container" v-bind:class="[activeclass, redclass]">
    Class Binding</div> -->
    <!--  -->
    <div v-bind:style="styleobject">인라인 스타일 Binding</div>

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
       styleobject

     
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