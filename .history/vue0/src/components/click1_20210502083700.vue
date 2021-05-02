<template>
  <div>
      <button type="button" v-on:click="자식호출1"
       ref="자식버튼">자식클릭</button>
       <H1>{{mas}}</H1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
        }
    },
methods: {
 자식호출1() {
     alert('이건 자식에서 눌려서 나오는 것')
 }
},
}
</script>

<style>

</style>