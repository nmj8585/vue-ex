<template>
  <input type="text" v-focus/>



  <!-- vue 커스텀 디렉티브란 -->
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