<template>
  <div>
      <ProvideInjectChild :itemLength=item.length/>
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