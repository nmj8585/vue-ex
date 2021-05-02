<template>
  <input type="text"/>
</template>

<script>
export default {
    directives: {
        focus: {
            monted(el)
            el.focus();
        }
    }
}
</script>

<style>

</style>