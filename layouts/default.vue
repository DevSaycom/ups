<template>
    <div>
<div class="container">
<nav class="navbar navbar-item is-logo" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
        <span class="has-text-danger is-size-3-desktop is-size-5-mobile has-text-weight-bold"> <span class="has-text-link has-text-weight-bold">Up</span>Tifact</span>
    </a>

  </div>
</nav>
</div>


  <Head/>

        <nuxt/>
<!-- footer -->
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Uptifact</strong> by <a href="https://ulterweb.com">Gonzalo Gutiérrez</a>. get in touch at <a class="auto" href="mailto:contact@uptifact.com" target="_blank">contact@uptifact.com</a>
            </p>
          </div>
        </footer>
    </div>
</template>

<script>
import Head from '../components/Head'
  export default {
    components: {
      Head
    }
  }
</script>

<style>

</style>