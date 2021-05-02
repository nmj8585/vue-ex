<template>
  <div>
      <button type="button" v-on:click="childFunc" ref="child_btn">자식에있는클릭</button>
  </div>
</template>

<script>
export default {
    props: {

    },
methods: {
    childFunc() {
       alert("부모컴포넌트에서 직접발생시킨 이벤트!!!(클릭뷰) "); 
    },
}
}
</script>

<style>

</style>