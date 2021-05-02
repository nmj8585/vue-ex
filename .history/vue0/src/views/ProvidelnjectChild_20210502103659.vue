<template>
  <div>
      <ProvideInjectChildChild :itemLength=lengthLength/>
  </div>
</template>

<script>
import ProvideInjectChildChild from "./ProvidelnjectChildChild.vue";
export default {
    components: { 
        ProvideInjectChildChild,
    },
    data() {
        return {
            itemLength: {
              type: Number,
              
            }
        }
    }

}
</script>

<style>

</style>