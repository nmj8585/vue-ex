<template>
  <div>Item Length: {{ this.items.length}}
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