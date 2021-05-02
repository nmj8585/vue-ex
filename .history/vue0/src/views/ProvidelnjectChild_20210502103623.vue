<template>
  <div>
      <ProvideInjectChildChild :itemLength=length/>
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
            items: ["a","b"],
        }
    }

}
</script>

<style>

</style>