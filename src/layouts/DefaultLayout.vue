<template>
  <div>
    <header-partial></header-partial>
    <main>
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>
<script>
import HeaderPartial from '@/partials/Header'
import FooterPartial from '@/partials/Footer'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>
