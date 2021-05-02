<template>
  <div>
  <!--조회화면 ,저장화면 실습
    1.어느정도 기본문법을 배웠으니 
    활용하는 측면 및 복습하는 걸 해보자 -->
  <!-- -->
  <div>
      <select v-model="selectedCity">
        <option v-bind:value="city.code" :key="i" v-for="(city,i) in cityList" >{{city.name}}</option>  
      </select>
      <input type="text" v-model="userName" v-on:keyup.enter="searchUserList"/>
      <button type="button" v-on:click="searchUserList" >조회</button>
  </div>
  <table>
    <thead>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>직업</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="{person, i} in userList">
        <td>{{person.name}}</td>
        <td>{{person.age}}</td>
        <td>{{person.job}}</td>
      </tr>
    </tbody>
  </table>
 </div>
</template>

<script>
export default {
 data () {
     return {
       cityList: [
         {name:'서울',code:'02'},
         {name:'부산',code:'21'},
         {name:'제주',code:'064'},
       ],
       selectedCity: '',
       userName: '',
       userList: [],
     
     }
 },
 
 methods: {
 }
}
</script>
<style>
</style>