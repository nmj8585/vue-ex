<template>
  <div>



<!-- 아래 메서드 내에  -->
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