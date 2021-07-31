<template>
  <div>
    <nav
      class="navbar header is-spaced is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="/assets/img/logo.png"
            alt="Star Wars Logotype"
            height="42"
          >
        </a>
      </div>
      <div class="flex flex-grow justify-end items-center">
        <nuxt-link to="/characters" class="link-invert">
          Characters
        </nuxt-link>
      </div>
    </nav>

    <section>
      <div>
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
