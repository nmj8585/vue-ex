<template>
  <div>
     <H1>{{title}}</H1>
     likes: {{likes}}
  </div>
</template>

<script>
export default {
    props: {
        likes: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ''
        }
    }

}
</script>

<style>

</style>