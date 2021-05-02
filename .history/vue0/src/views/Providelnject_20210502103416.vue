<template>
  <div>
      <ProvideInjectChild :itemLength=items.length/>
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
            i
        }
    }

}
</script>

<style>

</style>