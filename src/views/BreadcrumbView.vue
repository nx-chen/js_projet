<template>
  <div id="breadcrumb">
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/Tab">Tab</a></li>
      <li><a href="/Modal">Modal</a></li>
      <li>Italy</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbView'
}
</script>

<style scoped lang="less">
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
