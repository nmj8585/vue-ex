<template>
  <div>
      <ProvideInjectChildChild :itemLength=items.length/>
  </div>
</template>

<script>
import ProvideInjectChildChild from "./ProvidelnjectChild.vue";
export default {
    components: { 
        ProvideInjectChild,
    },
    data() {
        return {
            items: ["a","b"],
        }
    }

}
</script>

<style>

</style>