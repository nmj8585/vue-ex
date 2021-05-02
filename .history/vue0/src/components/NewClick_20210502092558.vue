<template>
  <div>

      <button type="button" @click="sendFromChild">자식컴포넌트 버튼</button>
      <p></p>
      <button type="button" @click="changeData">자식컴포넌트 데이타변경</button>
<!-- 버튼을 클릭이벤트 발생시 아래 정의된 메서드의 
     함수를 호출시키고
    아래 메서드 내에 함수에 사용된 $emit를 알아보자
 $emit은 자식컴포넌트로 부모컴포넌트에 이벤트를 발생시킨다
 자식에서 부모로 이벤트를 발생시키게끔 커스텀이벤트라 보면됨
 우리가 흔하게 알고있는 이벤트는 클릭이나 이런게 있는데
 이것은 커스텀 아래 정의된 내용을보면 
 this.$emit('send-message', this.mag);
 이곳에 커스텀이벤트중 send-message 로 
 여기 데이터에 만들어진 변수명 msg를 넣어준다
 $emit 은 자식컴포넌트에서 부모컴포넌트로 어떤 특정이벤트를 
 발생시켜주는 기능 함수
(1'send-message', 2this.mag); 여기에 
1번에 해당하는 파라미터 값은  이벤트 이름인것
2번에 경우 전달하고싶은 데이터를 넣어준것

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
            this.$emit('send-message', this.mag);
        },
        
    }

}
</script>

<style>

</style>