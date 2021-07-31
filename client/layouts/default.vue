<template>
  <div class="flex flex-col">
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
            aria-label="Star Wars Logotype"
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
      <div class="screen">
        <Nuxt />
      </div>
    </section>
    <footer class="footer static bottom-0 w-full">
      <div class="content has-text-centered">
        <img
          src="/assets/img/logo.png"
          alt="Star Wars Logotype"
          aria-label="Star Wars Logotype"
          width="100"
          class="mx-auto pb-2"
        >
        <p class="text-primary-invert">
          Copyright © 2021
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import Log from '../plugins/log'

export default defineComponent({
  setup () {
    // store people
    const store = usePeopleStore()

    // -----------------
    // methods

    const loadPeople = async () => {
      try {
        await store.loadPeople({ first: store.perPageDefault })
      } catch (error) {
        Log.error(error)
      }
    }

    // -----------------
    // events

    onMounted(async () => {
      await loadPeople()
    })
    return {
      // mounted
      onMounted
    }
  }
})
</script>
