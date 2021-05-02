<template>
  <div>
      <!-- <ProvideInjectChild :itemLength="items.length"/> -->
      <ProvideInjectChild/> 
      <!-- 어디서 받는지 모를경우가 있어서 관계가 명확하하게
      1대1인경우 에  -->
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
        return {
            itemLength: this.items.length,
            items: this.items,
        };
    },

};
</script>

<style>

</style>