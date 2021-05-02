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
    // props : {
            // itemLength: {
            //   type: Number,
            //   default : 0,
            // }
        }
    

}
</script>

<style>

</style>