<template>
  <div>



<!-- 아래 메서드 내에 함수에 사용된 $emit를 알아보자
 $emit은 자식컴포넌트로 부모컴포넌트에 이벤트를 발생시킨다
 자식에서 부모로 이벤트를 발생시키게끔 커스텀이벤트라 보면됨
  -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            mag: '자식컴포넌트로 부터 보내는 메세지'
        }
    },
    methods: {
        sendFromChild(){
            this.$emit('send-message');
        }
    }

}
</script>

<style>

</style>