<template>
  <div>
  <!-- 컴포넌트에서 다른컴포넌트 사용하기
  1.컴포넌트 안에서 다른컴포넌트 사용하기
  2.컴포넌트를 사용한다는것에 대한 의미알기 
  컴포넌트 재활용 컴포넌트 안에서 활용하는 것
  -->
   pegeT
  </div>
</template>

<script>
import PegeTitle from '../components/pageTitle.vue'
export default {
  components: {
    pegeTitle,
  },
 data () {
     return {
       isActive: true,
       isRed: true,
       

     
     }
 },
}

</script>
<style scoped>  
</style>