<template>
  <div>
    <header-partial></header-partial>
    <main>
      <div class="container">
        <slot></slot>
      </div>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>
<script>
import HeaderPartial from '@/partials/Header'
import FooterPartial from '@/partials/Footer'
export default {
  name: 'DashboardLayout',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>
