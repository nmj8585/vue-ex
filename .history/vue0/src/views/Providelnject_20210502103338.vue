<template>
  <div>
      <ProvideInjectChild :itemLength=it/>
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

        }
    }

}
</script>

<style>

</style>