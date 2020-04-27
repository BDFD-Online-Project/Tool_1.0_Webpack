<template>
  <div class="container">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Wolrd From Back-End Side"
    };
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: lightblue;
  box-shadow: 5px 5px 5px 5px;
}
</style>