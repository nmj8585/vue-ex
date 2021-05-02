<template>
  <div v-html="htmlSt">
      {{htmlString}}
  </div>
</template>

<script>
export default {
 data () {
     return {
        htmlString: '<p style="color:red;">이것은 붉은색글씨.</p>' 
     }
 }
}
</script>

<style>

</style>