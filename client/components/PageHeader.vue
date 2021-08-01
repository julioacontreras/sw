<template>
  <b-navbar class="is-primary" :collapsible="false" :mobile-burger="false">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="/assets/img/logo.png"
            alt="Star Wars Logotype"
            aria-label="Star Wars Logotype"
            height="42"
          >
        </a>
      </b-navbar-item>
    </template>
    <template #end class="bg-primary text-primary-invert">
      <nuxt-link to="/characters" class="link-invert mr-4 pt-4">
        Characters
      </nuxt-link>
    </template>
  </b-navbar>
</template>
