<template lang="html">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">{{title}}</p>
      <p class="subtitle">{{subtitle}}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "InfoTiles",
  props: ['title', 'subtitle']
}
</script>

<style lang="css">
</style>
