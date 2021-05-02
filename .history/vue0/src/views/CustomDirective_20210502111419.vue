<template>
  <input type="text" v-focus/>



  <!-- vue 커스텀 디렉티브란  
  v-포커스라는게 들어있는  HTML 객체가 마운티드 되는 순간에 
  el 위 인풋 테그 ~ 객체 를 의미하고 이 객체 .focus를 실행하는것
  라우터에 추가해서 보장 !!!
  현사항은 컴포넌트에 등록은 됬지만 이 장소에서만 사용이 가능한 상황이다
  이걸 전역에서 쓸수 있도록 해보자 

  이건 메인 .js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
위가 내거인데 영상은 좀 다르다 

const app = 


  -->
</template>

<script>
export default {
    directives: {
        focus: {
            mounted(el){
                el.focus();

            }
        }
    }
}
</script>

<style>

</style>