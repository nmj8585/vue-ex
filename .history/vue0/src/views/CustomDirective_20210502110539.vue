<template>
  <input type="text" v-foc/>
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