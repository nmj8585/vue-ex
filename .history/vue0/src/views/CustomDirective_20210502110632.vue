<template>
  <input type="text" v-focus/>



  <!-- vu -->
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