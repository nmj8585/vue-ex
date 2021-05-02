<template>
  <div>
      <input type="text" v-model="valueModel"/>
      input type="number" v-model="valueModel2"
  </div>
</template>

<script>
export default {
 data () {
     return {
         valueModel: '와우',
     }
 }
}
</script>

<style>

</style>