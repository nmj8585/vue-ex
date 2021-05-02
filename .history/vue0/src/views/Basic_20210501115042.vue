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
 //뷰 컴포넌트가 실행이 되는순간에 자동으로 크리에이티드 안에 정의된(생성된)크레이티드안에 코드는바로실행됨
 //그리고 템플릿 안에 지정되여있는 HTML 돔이 실제화면에 로딩이되는순간
 //마운트가 다 끝나는 순간 
 mounted() {},
 // 마운트디에 정의된여기에 작성된 자바스크립트 코드들이  순간에 바로 실행됨 
 unmounted() {},
//  
 methods: {

 }
 // 이게보는 것들은 실질적인 화면개발시 거의 모든 컴포넌트 기본작성메서드들
 //


}
</script>

<style>

</style>    