<template>
  <div>
  <!-- 부모컴포넌트에서 자식컴포넌트의 이벤트 발생시키기
  버튼 클릭이벤트 -->
  <!-- 부모컴포넌트에서 자식컴포넌트의 메소드 실행시키기 -->
   <button type="button" @click="부모버튼호출">부모에 있는 클릭</button>
  <Click1 ref="부모에서자식"  />
 
  </div>
</template>

<script>

import click1 from '../components/click1.vue';


export default {
  components: {
      click1,  
  },
 data () {
     return {
    
     }
 },
 methods: {
   부모버튼호출() {
     this.$refs.부모에서자식.$refs.자식버튼.자식호출1();
     this.$refs.부모에서자식.자식호출1();
     this.$refs.부모에서자식.msg=;
   },
   },
},
}

</script>
<style scoped>  
</style>