<template>
  <div>
      <ProvideInjectChildChild :itemLength=items.length/>
  </div>
</template>

<script>
import ProvideInjectChildChild from "./ProvidelnjectChildCh.vue";
export default {
    components: { 
        ProvideInjectChildChild,
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