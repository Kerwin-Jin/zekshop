<template>
  <div>
    {{categoryName}}
    {{keyword}}
    <TypeNav></TypeNav>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["categoryName","keyword"]
};
</script>

<style>
</style>