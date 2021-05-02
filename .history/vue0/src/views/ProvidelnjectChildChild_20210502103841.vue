<template>
  <div>Item Length: {{ this.i}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            itemLength: {
              type: Number,
              default : 0,
            }
        }
    }

}
</script>

<style>

</style>