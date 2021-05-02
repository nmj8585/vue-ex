<template>
  <input type="text" v-focus/>



  <!-- vue 커스텀 디렉티브란  
  v-포커스라는게 들어있는  HTML 객체가 마운티드 되는 순간에 
  el 위 인풋 테그 ~ 객체 를 의미하고 이 객체  -->
</template>

<script>
export default {
    directives: {
        focus: {
            mounted(el){
                el.focus();

            }
        }
    }
}
</script>

<style>

</style>