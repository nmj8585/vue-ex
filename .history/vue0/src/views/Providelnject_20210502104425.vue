<template>
  <div>
      <!-- <ProvideInjectChild :itemLength="items.length"/> -->
      <ProvideInjectChild/> 
  </div>
</template>

<script>
import ProvideInjectChild from "./ProvidelnjectChild.vue";
export default {
    components: { 
        ProvideInjectChild,
    },
    data() {
        return {
            items: ["a","b"],
        }
    },
    provide() {
        
    }

}
</script>

<style>

</style>