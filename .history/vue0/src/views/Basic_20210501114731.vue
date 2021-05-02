<template>
  <div>
      <h1>{{ title }}</h1>
      <input type="text" v-model="title"/> 
  </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
         title: 'Hello world2'
        };
    },
 setup() {},
 created() {},
 //뷰 컴포넌트가 실행이 되는순간에 자동으로 크리에이티드 안에 생성된 코드는바로실행됨
 //
 mounted() {},
 unmounted() {},
 methods: {

 }
 // 이게보는 것들은 실질적인 화면개발시 거의 모든 컴포넌트 기본작성메서드들
 //


}
</script>

<style>

</style>    