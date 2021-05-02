<template>
  <input type="text" v-focus/>



  <!-- vue 커스텀 디렉티브란  
  v-포커스라는-->
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