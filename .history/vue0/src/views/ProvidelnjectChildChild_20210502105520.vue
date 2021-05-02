<template>
  <div>Item Length: {{ this.itemslength}}
  </div>
</template>

<script>
export default {
    props{
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