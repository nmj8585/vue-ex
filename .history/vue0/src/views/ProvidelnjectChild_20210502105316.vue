<template>
  <div>
      <!-- <ProvideInjectChildChild :itemLength="lengthLength"/> -->
      <ProvideInjectChildChild/>
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
            // itemLength: {
            //   type: Number,
            //   default : 0,
            }
        }
    }

}
</script>

<style>

</style>